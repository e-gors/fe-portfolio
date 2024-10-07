import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import Http from "../../../../../utils/Http";
import { options, ToastNotification } from "../../../../../utils/toastConfig";
import { ContainedButton } from "../../../../../components/CustomButtons";

function UploadResume() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [customError, setCustomError] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle type selection change
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!file || !type) {
      setCustomError("Please select a file and a type.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("type", type);

    Http.post("resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.status === 201) {
          ToastNotification("success", res.data.message, options);
          setFile(null);
          setType("");
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Box sx={{ maxWidth: 500, mx: { xs: 2, md: "auto" }, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Upload Your Resume
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Resume Type Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="type-label">Resume Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              value={type}
              label="Resume Type"
              onChange={handleTypeChange}
            >
              <MenuItem value="Dev">Dev</MenuItem>
              <MenuItem value="Non Dev">Non Dev</MenuItem>
            </Select>
          </FormControl>

          {/* File Input for Resume Upload */}
          <FormControl fullWidth>
            <TextField
              type="file"
              inputProps={{ accept: ".pdf,.doc,.docx" }} // Accepts only specific file types
              onChange={handleFileChange}
            />
          </FormControl>
          <FormHelperText error sx={{ my: 2 }}>
            {customError && customError}
          </FormHelperText>

          {/* Submit Button */}
          <ContainedButton variant="contained" type="submit">
            {loading ? <CircularProgress size={24} /> : "Upload"}
          </ContainedButton>
        </form>
      </Box>
    </>
  );
}

export default UploadResume;
