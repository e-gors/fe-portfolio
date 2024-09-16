import * as React from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  Stack,
  FormHelperText,
  CircularProgress,
  Avatar,
} from "@mui/material";
import FormField from "../../../components/FormField";
import CloseIcon from "@mui/icons-material/Close";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/CustomButtons";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import RatingComp from "./RatingComp";
import { getApi, isEmpty, Validator } from "../../../utils/heplers";
import publicHttp from "../../../utils/publicHttp";
import {
  options,
  ToastNotification,
  ToastNotificationContainer,
} from "../../../utils/toastConfig";

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

// get the string of Avatar Component
const stringAvatar = (name) => {
  if (typeof name === "string" && name.trim() !== "") {
    const names = name.split(" ");
    const initials =
      names.length > 1 ? `${names[0][0]}${names[1][0]}` : names[0][0];
    return {
      children: initials.toUpperCase(),
    };
  } else {
    return {
      children: "DP",
    };
  }
};

//validation rules
const validator = Validator({
  guest_name: "required",
  project: "required",
  message: "required",
  rating: "required",
});

const MAX_LENGTH = 600;
const MIN_LENGTH = 400;

function FeedbackForm({
  title = "Modal Title",
  description = "Modal Description...",
  open,
  handleClose,
}) {
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      guest_name: "",
      project: "",
      message: "",
      rating: "",
    },
    errors: validator.errors,
  });
  const [profile, setProfile] = React.useState(null);
  const [messageCustomError, setMessageCustomError] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfile(file);
    else setProfile(null);
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

    // Custom validation for the message field
    if (name === "message") {
      if (value.length + 1 <= MIN_LENGTH) {
        setMessageCustomError(
          `Message must be at least ${MIN_LENGTH} characters.`
        );
      } else if (value.length + 1 > MAX_LENGTH + 1) {
        setMessageCustomError(
          `Message cannot exceed ${MAX_LENGTH} characters.`
        );
      } else {
        setMessageCustomError("");
      }
    }
  };

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success && !messageCustomError) {
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
    if (profile) {
      formData.append("profile", profile);
    }

    // Perform the HTTP POST request with the FormData object
    publicHttp
      .post(`${getApi()}/feedbacks`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct Content-Type for file uploads
        },
      })
      .then((res) => {
        if (res.data.status === 201) {
          ToastNotification("success", res.data.message, options);
          setFormValues({
            values: {
              guest_name: "",
              project: "",
              message: "",
              rating: "",
            },
          });
          setProfile(null);
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
            <FormHelperText sx={{ color: "red" }}>
              Note: Your feedback needs to be approved first before it will be
              display live.
            </FormHelperText>
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
                src={profile ? URL.createObjectURL(profile) : null}
                alt="Profile"
                sx={{ width: 75, height: 75, boxShadow: 4 }}
                {...stringAvatar(formValues.values.name)}
              />
              <Typography variant="body2" mt={2}>
                Upload Profile (optional):
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginTop: "8px" }}
              />
              <FormField
                name="guest_name"
                label="Guest Name"
                value={formValues.values.guest_name}
                onChange={handleChange}
                errors={formValues.errors}
                type="text"
                fullWidth
                margin="dense"
              />
            </Box>
            <FormField
              name="project"
              label="Project Title"
              value={formValues.values.project}
              onChange={handleChange}
              errors={formValues.errors}
              type="text"
              fullWidth
              margin="dense"
            />
            <FormField
              name="message"
              label="Your Feedback"
              value={formValues.values.message}
              onChange={handleChange}
              errors={formValues.errors}
              type="text"
              multiline
              fullWidth
              minRows={4}
              maxRows={5}
              margin="dense"
            />
            <FormHelperText error>{messageCustomError}</FormHelperText>
            <FormHelperText>
              {formValues.values.message.length} / {MAX_LENGTH}
            </FormHelperText>
            <RatingComp
              value={formValues.values.rating}
              onChange={handleChange}
              name="rating"
              errors={formValues.errors}
            />
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
            <OutlinedButton variant="outlined" onClick={handleClose}>
              Cancel
            </OutlinedButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default FeedbackForm;
