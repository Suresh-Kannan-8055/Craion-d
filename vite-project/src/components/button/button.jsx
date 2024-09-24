import React from "react";
import Button from '@mui/material/Button';

const Buttons = (props) => {
  return (
      <Button
        startIcon={props.icon}
        variant="outlined"
        sx={{
          textTransform: "none",
          width:props.width,
          height:props.height,
          color: props.color,
          padding: props.padding,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          margin:props.margin,
          background: props.background,
          border: props.border,
          borderRadius:props.borderRadius,
          cursor:"pointer"
        }}
        onClick={props.onClick} 
      >
        {props.text}
      </Button>
  );
};

export default Buttons;
