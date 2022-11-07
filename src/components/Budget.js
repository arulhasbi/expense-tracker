import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRemaining } from "../features/budgets/budgetsSlice";
import "./Budget.css";

export const Budget = ({ id, name, remaining }) => {
  const [fund, setFund] = useState(0);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      setRemaining({
        id,
        fund,
      })
    );
  };

  return (
    <BudgetWrapper>
      <BudgetMaxWidth>
        <span className="text-lg text-gray-400 font-bold block">Category</span>
        <div className="flex gap-3">
          <p className="text-3xl font-bold mr-auto">{name}</p>
          <input
            type="number"
            name="fund"
            className="border border-slate-600 w-[100px] rounded-md px-3"
            value={fund}
            onChange={({ target }) => setFund(target.value)}
          />
          <button
            type="button"
            className="border border-slate-600 w-[80px] rounded-md hover:cursor-pointer button-15"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        </div>
        <p className="my-4">Funds Remaining: ${remaining}</p>
      </BudgetMaxWidth>
    </BudgetWrapper>
  );
};

const BudgetWrapper = styled.div``;
const BudgetMaxWidth = styled.div``;
