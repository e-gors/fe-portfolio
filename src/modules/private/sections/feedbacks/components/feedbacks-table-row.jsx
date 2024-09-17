import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Label from "../../../../../components/label";
import Iconify from "../../../../../components/iconify";

// ----------------------------------------------------------------------

export default function ServicesTableRow({
  selected,
  guestName,
  project,
  message,
  status,
  rating,
  avatarUrl,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const statusColors = {
    declined: "error",
    void: "warning",
    pending: "secondary",
    approved: "success",
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={guestName} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {guestName}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>{project}</TableCell>
        <TableCell>{message}</TableCell>
        <TableCell align="center">{rating}</TableCell>
        <TableCell>
          <Label color={statusColors[status]}>{status}</Label>
        </TableCell>
        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

ServicesTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  profileImage: PropTypes.any,
  guestName: PropTypes.string,
  project: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  rating: PropTypes.number,
  selected: PropTypes.any,
  handleClick: PropTypes.func,
};
