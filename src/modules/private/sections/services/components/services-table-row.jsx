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

import Iconify from "../../../../../components/iconify";
import UpdateServiceForm from "./UpdateServiceForm";
import Http from "../../../../../utils/Http";
import CustomAlert from "../../../../../components/CustomAlert";

// ----------------------------------------------------------------------

export default function ServicesTableRow({
  selected,
  row = {},
  service,
  descriptions = [],
  image,
  handleClick,
}) {
  const [open, setOpen] = useState(null);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEdit = (data) => {
    setSelectedData(data);
    setOpenUpdateForm(true);
    handleCloseMenu();
  };

  const handleOnDelete = (id) => {
    setLoading(true);
    Http.delete(`services/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          console.log("success", res.data.message);
          setOpenAlert(false);
        } else {
          console.error("error", res.data.message);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    handleCloseMenu();
    setOpenAlert(true);
  };

  return (
    <>
      <CustomAlert
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        handleContinue={() => handleOnDelete(selectedId)}
        severity="warning"
        title={`You are about to delete service ${row.service}`}
        message={`Are you sure you want to continue? Please confirm if you want to proceed or cancel to keep service ${row.service}`}
        loading={loading}
      />
      <UpdateServiceForm
        open={openUpdateForm}
        handleClose={() => setOpenUpdateForm(false)}
        selected={selectedData}
      />
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={service} src={image} />
          </Stack>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {service}
          </Typography>
        </TableCell>
        <TableCell>
          {descriptions?.map((des, i) => (
            <li key={i}>{des}</li>
          ))}
        </TableCell>
        {/* <TableCell>
          <Label color={statusColors[status]}>{status}</Label>
        </TableCell> */}
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
        <MenuItem onClick={() => handleEdit(row)}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => handleDelete(row.id)}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

ServicesTableRow.propTypes = {
  id: PropTypes.number,
  selected: PropTypes.bool,
  row: PropTypes.object,
  service: PropTypes.string,
  descriptions: PropTypes.array,
  image: PropTypes.string,
  handleClick: PropTypes.func,
};
