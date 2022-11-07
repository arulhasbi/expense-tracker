import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const categoriesGenerator = (categories) => {
  let result = [];
  for (const category of categories) {
    result.push({
      id: faker.datatype.uuid(),
      name: category,
      remaining: 0,
    });
  }
  return result;
};

const budgetCategories = categoriesGenerator([
  "Housing",
  "Food",
  "Transportation",
  "Utilities",
  "Clothing",
  "Healthcare",
  "Personal",
  "Education",
  "Entertainment",
]);

const option = {
  name: "budgets",
  initialState: budgetCategories,
  reducers: {
    setRemaining(state, action) {
      const budget = state.find((budget) => budget.id === action.payload.id);
      budget.remaining = action.payload.fund;
    },
    reduceRemaining(state, action) {
      const budget = state.find((budget) => budget.id === action.payload.id);
      budget.remainig -= action.payload;
    },
  },
};

const budgetsSliceReducer = createSlice(option);

export const { setRemaining, reduceRemaining } = budgetsSliceReducer.actions;

export default budgetsSliceReducer.reducer;

export const selectAllBudgets = (state) => state;
