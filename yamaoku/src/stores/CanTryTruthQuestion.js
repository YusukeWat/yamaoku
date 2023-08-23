import React, { useState } from "react";

const STORED_KEY = "canTryTruthQuestion";

export const canTryTruthQuestion = () => {

  let storedValue = localStorage.getItem(STORED_KEY);

  if (storedValue === null) {
    setCanTryTruthQuestion(false);
    return false;
  }

  return storedValue === "true";
};

export const setCanTryTruthQuestion = (value) => {
  localStorage.setItem(STORED_KEY, value);
};
