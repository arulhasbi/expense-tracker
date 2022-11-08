import { configureStore } from "@reduxjs/toolkit";

import budgetsSliceReducer from "./budgets/budgetsSlice";
import transactionsSliceReducer from "./transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    budgets: budgetsSliceReducer,
    transactions: transactionsSliceReducer,
  },
});
