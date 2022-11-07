import React from "react";
import styled from "styled-components";
import { Budgets } from "../features/budgets/Budgets";

function App() {
  return (
    <div className="App">
      <Wrapper className="px-8 py-5">
        <MaxWidth>
          <h1 className="text-5xl font-bold subpixel-antialiased mb-5">
            Expense Tracker
          </h1>
          <Budgets />
        </MaxWidth>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div``;
const MaxWidth = styled.div``;

export default App;
