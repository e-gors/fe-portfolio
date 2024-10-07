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
  color: theme === "light" ? `var(--text_black)` : "var(--text_white)",
  textTransform: "none",

  "&:hover": {
    color: "var(--text_black)",
    backgroundColor: `var(--btn_bg_color)`,
    borderColor: `var(--btn_border_color)`,
    boxShadow: 5,
  },
}));

const TextButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: theme === "light" ? "var(--text_black)" : "var(--text_white)",
}));

const DangerButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF5C5C",
  color: theme === "light" ? "var(--text_black)" : "var(--text_white)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FF5C5C",
  },
}));

const WarningButton = styled(Button)(({ theme }) => ({
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
