import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const option = {
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction(state, action) {
      state.push({
        id: faker.datatype.uuid(),
        category: {
          id: action.payload.category.id,
          name: action.payload.category.name,
        },
        description: action.payload.description,
        amount: action.payload.amount,
      });
    },
    removeTransaction(state, action) {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
  },
};

const transactionsSliceReducer = createSlice(option);

export const { addTransaction, removeTransaction } =
  transactionsSliceReducer.actions;

export default transactionsSliceReducer.reducer;

export const selectAllTransaction = (state) => state;
