import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { usePathname, useRouter } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import { account } from "../../_mock/account";

import Logo from "../../components/logo";
import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function Nav({
  selectedPage,
  handlePageClick,
  navConfig,
  openNav,
  onCloseNav,
}) {
  const pathname = usePathname();

  const user = useSelector((state) => state.users.user);

  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname, user]); //eslint-disable-line

  const renderAccount = (
    <Box
      sx={{
        my: 1,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar
        src={user?.profilePicture ? user?.profilePicture : account.photoURL}
        alt="photoURL"
      />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">
          {user?.name ? user?.name : account.displayName}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {user?.role ? user?.role : account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item, i) => (
        <NavItem
          key={i}
          item={item}
          selected={
            selectedPage
              ? selectedPage === item.title
              : pathname === item.pathname
          }
          handlePageClick={handlePageClick}
        />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />

      {user?.id && renderAccount}
      <Divider sx={{ my: 2 }} />
      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
  selectedPage: PropTypes.string,
  handlePageClick: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item, selected, handlePageClick }) {
  const pathname = usePathname();
  const router = useRouter();

  const active = item.path === pathname;

  const handleClick = () => {
    if (handlePageClick !== undefined) {
      handlePageClick(item.title);
    } else {
      router.push(item.path);
    }
  };

  return (
    <ListItemButton
      onClick={handleClick}
      selected={selected}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  handlePageClick: PropTypes.func,
};
