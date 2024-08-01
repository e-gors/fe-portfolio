import { Button, styled } from "@mui/material";

const ContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#10fddd",
  color: "black",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#00dfc0",
    borderColor: "#00dfc0",
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: "#10fddd",
  color: "black",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#10fddd",
    borderColor: "#10fddd",
    boxShadow: 5,
  },
}));

const TextButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "black",
}));

const DangerButton = styled(Button)(({ them }) => ({
  backgroundColor: "#FF5C5C",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FF5C5C",
  },
}));

const WarningButton = styled(Button)(({ them }) => ({
  backgroundColor: "#FFC107",
  textTransform: "none",
}));

export {
  ContainedButton,
  OutlinedButton,
  TextButton,
  DangerButton,
  WarningButton,
};
