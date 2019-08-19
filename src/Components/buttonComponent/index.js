import React from "react";
import Button from "@material-ui/core/Button";

export const BTN = props => {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      SEARCH
    </Button>
  );
};
