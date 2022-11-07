import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper className="px-8 py-5">
        <MaxWidth>
          <h1 className="text-5xl font-bold subpixel-antialiased">
            Expense Tracker
          </h1>
        </MaxWidth>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div``;
const MaxWidth = styled.div``;

export default App;
