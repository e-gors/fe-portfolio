import { Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function ContactCard({ icon, value = "Value" }) {
  return (
    <Stack direction="row" spacing={2} mb={2}>
      {icon}
      <Typography variant="body1" color="text.secondary">
        {value}
      </Typography>
    </Stack>
  );
}

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default ContactCard;
