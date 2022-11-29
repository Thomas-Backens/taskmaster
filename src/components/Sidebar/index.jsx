import React from "react";
import UseStyles from "./styles";
import { Box, Button } from "@material-ui/core";

export default function Sidebar() {
  const s = UseStyles();

  return (
    <Box className={s.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={s.background}>
        <Box display="flex" flexDirection="column">
          <Button className={s.button}>Home</Button>
          <Button className={s.button}>Tasks</Button>
          <Button className={s.button}>Help</Button>
        </Box>
        <Box>
            <Button className={`${s.button} ${s.lowerButton}`}>Close</Button>
        </Box>
      </Box>
    </Box>
  );
}
