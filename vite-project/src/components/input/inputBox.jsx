import React from "react";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputBox = ({
  placeholder,
  onSearchClick,
  icon ,
  inputProps = {},
  inputBaseSx = { ml: 1, flex: 1 },
  iconButtonSx = { p: '10px' },
  ...rest
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...rest.style }}>
      <button
        type="button"
        sx={iconButtonSx}
        aria-label="search"
        onClick={onSearchClick}
        style={{background:"none",border:"none",padding:"5px 0 0 10px",color:"#aaa"}}
      >
        {icon}
      </button>
      <InputBase
        sx={inputBaseSx}
        placeholder={placeholder}
        inputProps={inputProps}
      />
    </div>
  );
};

export default InputBox;
