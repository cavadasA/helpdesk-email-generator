import { createStore } from "@reduxjs/toolkit";
import { universalReducer } from "./reducer";

export const store = createStore(
    universalReducer,
    {
      language: "",
      mailNumber: 0,
      name: "",
      ticket: "",
      instruction: "",
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );