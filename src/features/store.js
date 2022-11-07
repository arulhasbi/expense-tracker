import { configureStore } from "@reduxjs/toolkit";

import budgetsSliceReducer from "./budgets/budgetsSlice";

export const store = configureStore({
  reducer: {
    budgets: budgetsSliceReducer,
  },
});
