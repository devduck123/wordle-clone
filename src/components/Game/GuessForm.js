import React from "react";

export default function GuessForm(props) {
  const [guessInput, setGuessInput] = React.useState("");

  if (window.triggerResetForm === "true") {
    window.triggerResetForm = "false";
    changeGuessInput(() => {
      return "";
    });
  }

  function changeGuessInput(inputVal) {
    const cleanInputVal = inputVal.length > 0 ? inputVal.toUpperCase() : "";
    setGuessInput(() => cleanInputVal);
  }

  function submitForm() {
    if (guessInput.length !== 5) {
      console.log("Guess must be 5 letters!");
    } else {
      props.addGuessToTracker(guessInput);
      console.log(guessInput);
    }
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        submitForm();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={props.isEndOfGame}
        value={guessInput}
        onChange={(event) => {
          changeGuessInput(event.target.value);
        }}
      />
    </form>
  );
}
