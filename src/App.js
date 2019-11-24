import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "rimble-ui";
import { Button, Form } from "rimble-ui";
import { Box } from "rimble-ui";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Form>
          <Form.Field label="Email" width={1}>
            <Form.Input type="email" required width={1} />
          </Form.Field>
          <Form.Field label="Password" width={1}>
            <Form.Input type="password" required width={1} />
          </Form.Field>
          <Box>
            <Form.Check label="Remember me?" mb={3} />
          </Box>
          <Button type="submit" width={1}>
            Sign Up
          </Button>
        </Form>
      </ThemeProvider>
    </div>
  );
}

export default App;
