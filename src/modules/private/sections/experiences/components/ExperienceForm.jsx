import React from "react";
import { isEmpty, validateLink, Validator } from "../../../../../utils/heplers";
import {
  options,
  ToastNotification,
  ToastNotificationContainer,
} from "../../../../../utils/toastConfig";
import {
  Avatar,
  Box,
  CircularProgress,
  FormHelperText,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormField from "../../../../../components/FormField";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../../../components/CustomButtons";
import SendIcon from "@mui/icons-material/Send";
import Http from "../../../../../utils/Http";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  minWidth: 320,
  boxShadow: 24,
  borderRadius: 2,
  p: { xs: 2, md: 4 },
};

// validation rules
const validator = Validator({
  jobPosition: "required",
  companyName: "required",
  description: "required",
  link: "",
});

const MIN_CHARS = 350;
const MAX_CHARS = 700;

function ExperienceForm({
  title = "Modal Title",
  description = "Modal Description...",
  open,
  handleClose,
}) {
  const theme = useSelector((state) => state.theme.theme);

  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      jobPosition: "",
      companyName: "",
      description: "",
      link: "",
    },
    errors: validator.errors,
  });
  const [picture, setImage] = React.useState(null);

  // dates
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const [customError, setCustomError] = React.useState("");
  const [customErrorLink, setCustomErrorLink] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
    else setImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then((success) => {
      if (!success) {
        setFormValues((prev) => ({
          ...prev,
          errors,
        }));
      }
    });

    if (name === "description") {
      if (value.length >= MIN_CHARS && value.length <= MAX_CHARS) {
        setCustomError("");
      } else {
        setCustomError(
          `Description must be between ${MIN_CHARS} and ${MAX_CHARS} characters.`
        );
      }
    }

    if (name === "link") {
      if (!isEmpty(value)) {
        if (validateLink(value)) {
          setCustomErrorLink("");
        } else {
          setCustomErrorLink("Invalid link!");
        }
      }
    }
  };

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success && !customError && !customErrorLink) {
        handleSubmit();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    // Create a new FormData object
    const formData = new FormData();

    // Append form values to the FormData object
    for (const [key, value] of Object.entries(formValues.values)) {
      formData.append(key, value);
    }

    // Append the file to the FormData object if it exists
    if (picture) {
      formData.append("websiteLogo", picture);
    }

    // Append formatted start date and end date
    if (startDate) {
      formData.append("startDate", dayjs(startDate).format("MMM YYYY"));
    }
    if (endDate) {
      formData.append("endDate", dayjs(endDate).format("MMM YYYY"));
    }

    // Perform the HTTP POST request with the FormData object
    Http.post("/experiences", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the correct Content-Type for file uploads
      },
    })
      .then((res) => {
        if (res.data.status === 201) {
          ToastNotification("success", res.data.message, options);
          setFormValues({
            values: {
              jobPosition: "",
              companyName: "",
              description: "",
              link: "",
            },
          });
          setImage(null);
          setStartDate(null);
          setEndDate(null);
          handleClose();
        } else {
          // Handle other response statuses or errors
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        // Handle request errors
        ToastNotification("error", err.message, options);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when done
      });
  };

  return (
    <div>
      <ToastNotificationContainer />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} maxWidth="sm">
          <Box sx={{ width: "100%", position: "relative" }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                top: { xs: -10, md: -20 },
                right: { xs: -5, md: -10 },
              }}
            >
              <CloseIcon color="error" />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Typography id="keep-mounted-modal-title" variant="h6">
              {title}
            </Typography>
            <Typography
              id="keep-mounted-modal-description"
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
          </Box>
          <Box
            component="form"
            my={2}
            sx={{ maxHeight: 520, overflow: "auto" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={2}
            >
              <Avatar
                src={picture ? URL.createObjectURL(picture) : null}
                alt="Website Logo"
                sx={{ width: 75, height: 75, boxShadow: 4 }}
              />
              <Typography variant="body2" mt={2}>
                Upload Image:
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginTop: "8px" }}
              />
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormField
                  name="jobPosition"
                  label="Job Position"
                  value={formValues.values.jobPosition}
                  onChange={handleChange}
                  errors={formValues.errors}
                  type="text"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormField
                  name="companyName"
                  label="Company Name"
                  value={formValues.values.companyName}
                  onChange={handleChange}
                  errors={formValues.errors}
                  type="text"
                  fullWidth
                  margin="dense"
                />
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Start Month & Year"
                    views={["year", "month"]}
                    value={startDate}
                    onChange={(value) => setStartDate(value)}
                    renderInput={(params) => (
                      <FormField {...params} fullWidth />
                    )}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="End Month & Year"
                    views={["year", "month"]}
                    value={endDate}
                    onChange={(value) => setEndDate(value)}
                    renderInput={(params) => (
                      <FormField {...params} fullWidth />
                    )}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>

            <FormField
              name="description"
              label="Description"
              value={formValues.values.description}
              onChange={handleChange}
              errors={formValues.errors}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <FormHelperText>
              {formValues.values.description.length} / {MAX_CHARS}
            </FormHelperText>
            {customError && (
              <FormHelperText error={!!customError}>
                {customError}
              </FormHelperText>
            )}

            <FormField
              name="link"
              label="Link"
              value={formValues.values.link}
              onChange={handleChange}
              errors={formValues.errors}
              fullWidth
              margin="dense"
            />
            {customErrorLink && (
              <FormHelperText error={!!customErrorLink}>
                {customErrorLink}
              </FormHelperText>
            )}

            <Stack direction="row" spacing={2} mt={2}>
              <ContainedButton
                variant="contained"
                onClick={handleValidate}
                disabled={loading}
                endIcon={
                  loading ? <CircularProgress size={24} /> : <SendIcon />
                }
              >
                Submit
              </ContainedButton>
              <OutlinedButton theme={theme} variant="outlined" onClick={handleClose}>
                Cancel
              </OutlinedButton>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ExperienceForm;
