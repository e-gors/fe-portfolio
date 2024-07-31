import { Button, styled } from "@mui/material";

const ContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5ABED5",
  color: "white",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#5ABED5",
    borderColor: "#5ABED5",
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: "#5ABED5",
  color: "#5ABED5",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#5ABED5",
    borderColor: "white",
    color: "white",
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
