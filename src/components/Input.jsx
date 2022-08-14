import * as React from "react";
import { FormControl, FormHelperText, TextField, Box } from "@mui/material";

function Input() {
  return (
    <div className="formDiv">
      <FormControl>
        <Box m={2}>
          {/*name field */}
          <TextField
            id="outlined-password-input"
            label="Name"
            type="text"
            autoComplete="current-password"
          />
          <FormHelperText id="my-helper-text" className="inputMargin textWhite">
            Enter your name
          </FormHelperText>
        </Box>

        <Box m={2}>
          {/*password field */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormHelperText id="my-helper-text" className="textWhite">
            Enter your password
          </FormHelperText>
        </Box>
      </FormControl>
    </div>
  );
}

export default Input;
