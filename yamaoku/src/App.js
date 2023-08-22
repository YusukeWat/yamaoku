import React from "react";
import { CssBaseline, Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Discription from "./components/Discription";
import Answer from "./components/Answer";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Grid container >
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Header position="fixed" alignItems="center" />
            <Routes>
              <Route path="/" element={<Discription />} />
              <Route path="/answer" element={<Answer />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
