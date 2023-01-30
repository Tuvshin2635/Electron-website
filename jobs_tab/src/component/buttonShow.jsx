import React from "react";

import { Button } from "@mui/material";
import DATA from "../data/data";

export default function ButtonShow({ show, setShow }) {
  const titleMajor = DATA.map((data) => {
    return (
      <div>
        <p> {data.company} </p>
      </div>
    );
  });

  return (
    <div>
      <Button
        onClick={() => {
          setShow(true);
          if (!show) {
            const showData = {
              titleMajor,
            };
          }
        }}
      >
        showooo
      </Button>
      {/* <Button
        onClick={() => {
          setShow(true);
        }}
      >
        showooo2
      </Button> */}
    </div>
  );
}
