import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField
          label="Note Title"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </form>
    </Container>
  );
};

export default App;
