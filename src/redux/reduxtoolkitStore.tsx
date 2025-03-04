import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxtoolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
