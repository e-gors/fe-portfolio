import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";

import Iconify from "../../../../../components/iconify";

// ----------------------------------------------------------------------

export default function ProjectsTableRow({
  selected,
  type,
  name,
  link,
  description,
  picture,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none" sx={{ p: 2 }}>
          <img alt={name} src={picture} style={{ width: 240 }} />
        </TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{link}</TableCell>
        <TableCell>{description}</TableCell>
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

ProjectsTableRow.propTypes = {
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
