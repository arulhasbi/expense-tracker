import React from "react";
import styled from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { removeTransaction } from "../features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";

export const Expense = ({ state }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeTransaction(state.id));
  };
  return (
    <ExpenseWrapper className="border border border-slate-600 p-4 rounded-md my-5">
      <ExpenseMaxWidth className="flex items-center">
        <p className="font-bold mr-auto">
          ${state.amount} -{" "}
          <span className="font-light">
            {state.category.name} ({state.description})
          </span>
        </p>
        <button type="button" onClick={handleRemove}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </ExpenseMaxWidth>
    </ExpenseWrapper>
  );
};

const ExpenseWrapper = styled.div``;
const ExpenseMaxWidth = styled.div``;
