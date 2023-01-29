import React from "react";

import { Button } from "@mui/material";

export default function ButtonShow({ setShow }) {
  return (
    <div>
      <Button
        onClick={() => {
          setShow(false);
        }}
      >
        showooo
      </Button>
    </div>
  );
}
