import React from "react";
import { isEmpty, validateLink, Validator } from "../../../../../utils/heplers";
import {
  options,
  ToastNotification,
  ToastNotificationContainer,
} from "../../../../../utils/toastConfig";
import {
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
import SelectDropdown from "../../../../../components/SelectDropdown";
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

//validation rules
const validator = Validator({
  clientType: "required",
  type: "required",
  name: "required",
  link: "",
  description: "required",
});

const MIN_CHARS = 50;
const MAX_CHARS = 150;
function ProjectForm({
  title = "Modal Title",
  description = "Modal Description...",
  open,
  handleClose,
}) {
  const theme = useSelector((state) => state.theme.theme);
  
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      clientType: "",
      type: "",
      name: "",
      link: "",
      description: "",
    },
    errors: validator.errors,
  });
  const [picture, setImage] = React.useState(null);
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
      if (validateLink(value)) {
        setCustomErrorLink("");
      } else {
        setCustomErrorLink("Invalid link!");
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

    if (isEmpty(picture?.name)) {
      setLoading(false);
      ToastNotification("error", "You must upload an image!", options);
    } else {
      // Create a new FormData object
      const formData = new FormData();

      // Append form values to the FormData object
      for (const [key, value] of Object.entries(formValues.values)) {
        formData.append(key, value);
      }

      // Append the file to the FormData object if it exists
      if (picture) {
        formData.append("picture", picture);
      }

      // Perform the HTTP POST request with the FormData object
      Http.post("/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct Content-Type for file uploads
        },
      })
        .then((res) => {
          if (res.data.status === 201) {
            ToastNotification("success", res.data.message, options);
            setFormValues({
              values: {
                type: "",
                name: "",
                link: "",
                description: "",
              },
            });
            setImage(null);
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
    }
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
              my={2}
            >
              <img
                src={picture ? URL.createObjectURL(picture) : null}
                alt="Website"
                style={{
                  width: "100%",
                  height: 150,
                  border: "1px dotted black",
                  boxShadow: 4,
                }}
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
            <SelectDropdown
              options={["local", "worldwide"]}
              label="Client Type"
              name="clientType"
              erorrs={formValues.errors}
              value={formValues.values.clientType}
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormField
                  name="type"
                  label="Page Type"
                  value={formValues.values.type}
                  onChange={handleChange}
                  errors={formValues.errors}
                  type="text"
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormField
                  name="name"
                  label="Project Name"
                  value={formValues.values.name}
                  onChange={handleChange}
                  errors={formValues.errors}
                  type="text"
                  fullWidth
                  margin="dense"
                />
              </Grid>
            </Grid>

            <FormField
              name="link"
              label="Page Link"
              value={formValues.values.link}
              onChange={handleChange}
              errors={formValues.errors}
              type="text"
              fullWidth
              margin="dense"
            />
            <FormHelperText error>
              {customErrorLink && customErrorLink}
            </FormHelperText>
            <FormField
              name="description"
              label="Description"
              value={formValues.values.description}
              onChange={handleChange}
              errors={formValues.errors}
              type="text"
              multiline
              fullWidth
              minRows={2}
              maxRows={4}
              margin="dense"
            />
            <FormHelperText error>{customError && customError}</FormHelperText>
          </Box>
          <Stack direction="row" spacing={2}>
            <ContainedButton
              variant="contained"
              onClick={handleValidate}
              disabled={loading}
              endIcon={loading ? <CircularProgress size={24} /> : <SendIcon />}
            >
              Submit
            </ContainedButton>
            <OutlinedButton theme={theme} variant="outlined" onClick={handleClose}>
              Cancel
            </OutlinedButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectForm;
