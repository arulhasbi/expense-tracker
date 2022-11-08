import React from "react";
import styled from "styled-components";
import { Budgets } from "../features/budgets/Budgets";
import { Transactions } from "../features/transactions/Transactions";
import { Expense } from "../components/Expense";
import { useSelector } from "react-redux";
import { selectAllTransaction } from "../features/transactions/transactionsSlice";

function App() {
  const allTransaction = useSelector(selectAllTransaction);
  return (
    <div className="App">
      <Wrapper className="px-8 py-5">
        <MaxWidth>
          <h1 className="text-5xl font-bold subpixel-antialiased mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-md">
            Expense Tracker
          </h1>
          <Budgets />
        </MaxWidth>
        <div className="mb-[276px]">
          {allTransaction.transactions.length !== 0 &&
            allTransaction.transactions.map((transaction) => (
              <div key={transaction.id}>
                <Expense state={transaction} />
              </div>
            ))}
        </div>
        <Transactions />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div``;
const MaxWidth = styled.div``;

export default App;
