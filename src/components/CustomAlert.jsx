import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Toolbar,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import { DangerButton, OutlinedButton } from "./CustomButtons";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomAlert({
  open,
  handleClose,
  handleContinue,
  title,
  message,
  loading,
  severity,
  icon,
}) {
  const theme = useSelector((state) => state.theme.theme);
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ p: 1, backgroundColor: "#FFF9E2" }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: "#FFF394",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <span></span>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <DialogTitle id="modal-modal-title" variant="h6" component="h2">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="modal-modal-description" sx={{ mt: 1 }}>
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <DangerButton onClick={handleContinue} variant="contained">
              {loading ? <CircularProgress size={24} /> : "Yes"}
            </DangerButton>
            <OutlinedButton
              theme={theme}
              onClick={handleClose}
              variant="outlined"
            >
              No
            </OutlinedButton>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
