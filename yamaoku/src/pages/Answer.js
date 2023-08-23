import { Button, TextField, Typography, Grid, Container } from "@mui/material";
import React, { useState } from "react";
import { setCanTryTruthQuestion } from "../stores/CanTryTruthQuestion";

const ANSWERS = {
  no1: "あれ",
  no2: "それ",
  no3: "こう",
}

const AnswerField = ({ fieldName, onChange }) => {
  const [input, setInput] = useState("");

  const handleAnswerChange = (e) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        type="text"
        label={fieldName}
        variant="outlined"
        value={input}
        onChange={handleAnswerChange}
        gutterBottom
      />
    </div>
  );
};

const AnswerPage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (input1 === ANSWERS.no1 && input2 === ANSWERS.no2 && input3 === ANSWERS.no3) {
      setCanTryTruthQuestion(true);
      setFeedback("正解……？");
    } else {
      setFeedback("不正解。。");
    }
  }

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={1}></Grid>
        <Grid item xs={16}>
          <AnswerField fieldName="①" onChange={setInput1} />
          <Typography variant="h6">が</Typography>
        </Grid>
        <Grid item xs={16}>
          <AnswerField fieldName="②" onChange={setInput2} />
          <Typography variant="h6">を</Typography>
        </Grid>
        <Grid item xs={16}>
          <AnswerField fieldName="③" onChange={setInput3} />
          <Typography variant="h6">するシステムが欲しい</Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={16}>
          <Button variant="contained" onClick={handleSubmit}>回答する</Button>
        </Grid>
        <Grid item xs={16}>
          {feedback && <Typography variant="h5">{feedback}</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnswerPage;
