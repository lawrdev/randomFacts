import { useState } from "react";
import { useRouter } from "next/router";
import { IconButton, Menu as MenuMui } from "@mui/material";
import styles from "./Menu.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import Menu as MenuMui from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";

const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // sx={{ p: 0 }}
      >
        {open ? (
          <CloseRoundedIcon fontSize="large" />
        ) : (
          <MenuRoundedIcon fontSize="large" />
        )}
      </IconButton>

      <MenuMui
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ width: "300px !important" }}
      >
        <MenuItem
          onClick={() => {
            router.push("/");
            handleClose();
          }}
        >
          <p className="text-primary font-bold px-5">Home</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/about");
            handleClose();
          }}
        >
          <p className="text-primary font-bold px-5">About</p>
        </MenuItem>
      </MenuMui>
    </>
  );
};

export default Menu;
