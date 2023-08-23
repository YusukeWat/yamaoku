import React from "react";
import { CssBaseline, Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DiscriptionPage from "./pages/Discription";
import AnswerPage from "./pages/Answer";
import TruthAnswerPage from "./pages/TruthAnswer";
import { setCanTryTruthQuestion } from "./stores/CanTryTruthQuestion";

const App = () => {
  setCanTryTruthQuestion(false);
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
              <Route path="/" element={<DiscriptionPage />} />
              <Route path="/answer" element={<AnswerPage />} />
              <Route path="/truthanswer" element={<TruthAnswerPage />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
