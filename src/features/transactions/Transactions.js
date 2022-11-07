import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectAllBudgets } from "../budgets/budgetsSlice";
import "./Transactions.css";

export const Transactions = () => {
  const state = useSelector(selectAllBudgets);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    console.log(description);
    console.log(amount);
    console.log(category);
  };

  useEffect(() => {
    if (state.budgets.length !== 0) {
      setCategory(state.budgets[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TransactionsWrapper className="shadow-1 fixed left-0 bottom-0 w-full bg-white pb-7">
      <TransactionsMaxWidth className="py-7 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-white text-5xl font-bold subpixel-antialiased mb-5 drop-shadow-lg">
          New Transactions
        </h1>
        <div className="flex justify-between">
          <div>
            <span className="text-lg text-white font-bold block mb-1">
              Category
            </span>
            <select
              name="category"
              id="category"
              className="border rounded-md p-1"
              value={state.category}
              onChange={(target) => setCategory(target.value)}
            >
              {state.budgets.length !== 0 &&
                state.budgets.map((budget) => (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <span className="text-lg text-white font-bold block mb-1">
              Description
            </span>
            <input
              type="text"
              name="description"
              value={description || ""}
              onChange={({ target }) => setDescription(target.value)}
              className="border border-slate-600 max-w-[150px] rounded-md p-1"
            />
          </div>
          <div>
            <span className="text-lg text-white font-bold block mb-1">
              Amount
            </span>
            <input
              type="number"
              name="amount"
              value={amount}
              className="border border-slate-600 w-[100px] rounded-md p-1"
              onChange={({ target }) => setAmount(target.value)}
            />
          </div>
        </div>
      </TransactionsMaxWidth>
      <div className="px-6">
        <button type="button" className="button-54 mt-5" onClick={handleSubmit}>
          Add Transaction
        </button>
      </div>
    </TransactionsWrapper>
  );
};

const TransactionsWrapper = styled.div``;
const TransactionsMaxWidth = styled.div``;
