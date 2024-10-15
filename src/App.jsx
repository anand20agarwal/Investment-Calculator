import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,  // Corrected typo here
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;
  

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center"> Please Input Valid Input Data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;