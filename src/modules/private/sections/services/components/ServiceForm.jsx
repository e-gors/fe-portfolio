import React from "react";
import { isEmpty, Validator } from "../../../../../utils/heplers";
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
  service: "required",
  description: "required",
});

function ServiceForm({
  title = "Modal Title",
  description = "Modal Description...",
  open,
  handleClose,
}) {
  const theme = useSelector((state) => state.theme.theme);

  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      service: "",
      description: "",
      descriptions: [],
    },
    errors: validator.errors,
  });
  const [image, setImage] = React.useState(null);
  const [customError, setCustomError] = React.useState("");
  const [customErrorDes, setCustomErrorDes] = React.useState("");

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
      if (value.length >= 20 && value.length <= 100) {
        setCustomError("");
      } else {
        setCustomError("Description must be between 20 and 100 characters.");
      }
    }
  };

  const handleAddNewDescription = () => {
    const { description, descriptions } = formValues.values;

    // First, trim the description to remove any extra whitespace
    const trimmedDescription = description.trim();

    // Check if the trimmed description has a value, and its length is between 20 and 100 characters
    if (
      trimmedDescription &&
      trimmedDescription.length >= 20 &&
      trimmedDescription.length <= 100
    ) {
      // Add the description to the array and reset the description field
      setFormValues((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          descriptions: [...descriptions, trimmedDescription],
          description: "", // Clear the description field
        },
      }));
    }
  };

  const handleValidate = () => {
    const descriptions = formValues.values.descriptions;

    validator.validateAll(formValues.values).then((success) => {
      if (isEmpty(descriptions) && descriptions.length > 1) {
        setCustomErrorDes("You should add atleast 2 to 3 descriptions!");
      } else {
        setCustomErrorDes("");
        if (success && !customError) {
          handleSubmit();
        } else {
          setFormValues((prev) => ({
            ...prev,
            errors: validator.errors,
          }));
        }
      }
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    if (isEmpty(image?.name)) {
      setLoading(false);
      ToastNotification("error", "You must upload an image!", options);
    } else {
      // Create a new FormData object
      const formData = new FormData();

      // push last added description
      if (!isEmpty(formValues.values.description)) {
        formValues.values.descriptions.push(formValues.values.description);
      }

      // Append form values to the FormData object
      for (const [key, value] of Object.entries(formValues.values)) {
        formData.append(key, value);
      }

      // Append the file to the FormData object if it exists
      if (image) {
        formData.append("image", image);
      }

      // Perform the HTTP POST request with the FormData object
      Http.post("/services", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct Content-Type for file uploads
        },
      })
        .then((res) => {
          if (res.data.status === 201) {
            ToastNotification("success", res.data.message, options);
            setFormValues({
              values: {
                service: "",
                description: "",
                descriptions: [],
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
              mt={2}
            >
              <Avatar
                src={image ? URL.createObjectURL(image) : null}
                alt="Profile"
                sx={{ width: 75, height: 75, boxShadow: 4 }}
                {...stringAvatar(formValues.values.name)}
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
              <FormField
                name="service"
                label="Service Name"
                value={formValues.values.service}
                onChange={handleChange}
                errors={formValues.errors}
                type="text"
                fullWidth
                margin="dense"
              />
            </Box>
            <FormField
              name="description"
              label="Description"
              value={formValues.values.description}
              onChange={handleChange}
              errors={formValues.errors}
              type="text"
              multiline
              fullWidth
              minRows={1}
              maxRows={3}
              margin="dense"
            />
            <FormHelperText error>
              {customErrorDes && customErrorDes}
            </FormHelperText>
            <FormHelperText error>{customError && customError}</FormHelperText>
            <ul>
              {formValues?.values?.descriptions?.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <ContainedButton
              variant="contained"
              onClick={handleAddNewDescription}
            >
              Add New Description
            </ContainedButton>
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

export default ServiceForm;
