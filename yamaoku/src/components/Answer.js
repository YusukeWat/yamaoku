import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AnswerField = ({ fieldName, onAnswerChange }) => {
  const [input, setInput] = useState("");

  const handleAnswerChange = (e) => {
    setInput(e.target.value);
    onAnswerChange(e.target.value);
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

const Answer = () => {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAnswerChange = (answer) => {
    setQuizAnswer(answer);
  };

  const handleSubmit = () => {
    if (quizAnswer === "答え") {
      setFeedback("正解！");
    } else {
      setFeedback("不正解。。");
    }
  }

  return (
    <div>
      <AnswerField fieldName="①" onAnswerChange={handleAnswerChange} />
      <Button variant="contained" onClick={handleSubmit}>回答する</Button>
      {feedback && <Typography>{feedback}</Typography>}
    </div>
  );
};

export default Answer;
