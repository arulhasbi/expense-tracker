import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectAllBudgets } from "./budgetsSlice";
import { Budget } from "../../components/Budget";

export const Budgets = () => {
  const state = useSelector(selectAllBudgets);
  return (
    <BudgetsWrapper>
      <BudgetsMaxWidth>
        {state.budgets.length !== 0 &&
          state.budgets.map((budget) => (
            <div key={budget.id}>
              <Budget
                id={budget.id}
                name={budget.name}
                remaining={budget.remaining}
              />
              <hr className="mb-4" />
            </div>
          ))}
      </BudgetsMaxWidth>
    </BudgetsWrapper>
  );
};

const BudgetsWrapper = styled.div``;
const BudgetsMaxWidth = styled.div``;
