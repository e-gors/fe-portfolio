import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Iconify from "../../../components/iconify";
import SelectDropdown from "../../../components/SelectDropdown";
import FormField from "../../../components/FormField";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "10px 10px",
    },
    "& .MuiMenuItem-root": {
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MenuFilter(props) {
  const {
    filterValues,
    filterItems = [],
    onMultipleFilters,
    onClearFilters,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const getFilterValue = (name) => {
    return filterValues[name];
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearFilters = () => {
    if (onClearFilters) {
      handleClose();
      onClearFilters();
    }
  };

  return (
    <>
      <Tooltip title="Filter list" arrow>
        <IconButton onClick={handleClick}>
          <Iconify icon="ic:round-filter-list" />
        </IconButton>
      </Tooltip>
      {filterItems.length !== 0 && (
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Typography align="center">Select to filter data</Typography>
          <Divider sx={{ my: 1 }} />
          {filterItems.length !== 0 &&
            filterItems.map((item, index) => (
              <MenuItem key={index}>
                {item.type === "dropdown" && (
                  <SelectDropdown
                    name={item.name}
                    value={getFilterValue(item.name)}
                    label={item.label}
                    options={item.options}
                    onChange={onMultipleFilters}
                    size="small"
                  />
                )}
                {item.type === "textfield" && (
                  <FormField
                    name={item.name}
                    value={getFilterValue(item.name)}
                    label={item.label}
                    onChange={onMultipleFilters}
                    size="small"
                  />
                )}
              </MenuItem>
            ))}
          <Divider sx={{ my: 1 }} />
          <MenuItem>
            <Button
              onClick={handleClearFilters}
              color="secondary"
              variant="outlined"
            >
              Clear Filters
            </Button>
          </MenuItem>
        </StyledMenu>
      )}
    </>
  );
}
