import { Button, styled } from "@mui/material";

const ContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: `var(--btn_bg_color)`,
  color: `var(--text_black)`,
  textTransform: "none",

  "&:hover": {
    backgroundColor: `var(--btn_hover_bg_color)`,
    borderColor: `var(--btn_hover_border_color)`,
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: `var(--btn_border_color)`,
  color: `var(--text_black)`,
  textTransform: "none",

  "&:hover": {
    backgroundColor: `var(--btn_bg_color)`,
    borderColor: `var(--btn_border_color)`,
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
