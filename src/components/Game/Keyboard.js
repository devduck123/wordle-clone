import { checkGuess } from "/src/game-helpers.js";

// Challenge Exercise: Build the Keyboard component that
// exists under the GuessForm component. This component
// should reflect the status of the letters, similar
// to how the letters in the board do.

export default function Keyboard(props) {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  // FUTURE TODO:
  // To make the improvement of persisting
  // keyboard status styles with additions of guesses,
  // we have to persist the keyboard in state.
  // Each letter should have a corresponding status
  // which we could represent as an object.
  // (Array of 26 objects)

  const guessOutcome =
    props.guessTracker.length > 0
      ? checkGuess(
          props.guessTracker[props.guessTracker.length - 1].value,
          props.answer
        )
      : [];

  const statusToStyle = {
    // Correct letters should have a green background and white text
    // Misplaced letters should have a yellow background and white text
    // Incorrect letters should have a dark gray background and white text
    // Unused letters should have a light gray background and black text
    correct: { backgroundColor: "green", textColor: "white" },
    misplaced: { backgroundColor: "yellow", textColor: "white" },
    incorrect: { backgroundColor: "gray", textColor: "white" },
    unused: { backgroundColor: "lightGray", textColor: "black" },
  };

  function getLetterStatus(letter) {
    for (const obj of guessOutcome) {
      if (obj.letter === letter) {
        return obj.status;
      }
    }
    return "unused";
  }

  function getStatusStyle(status) {
    switch (status) {
      case "correct":
        return statusToStyle.correct;
      case "misplaced":
        return statusToStyle.misplaced;
      case "incorrect":
        return statusToStyle.incorrect;
      case "unused":
        return statusToStyle.unused;
      default:
        return {};
    }
  }

  function addLetterStyle(letter) {
    const status = getLetterStatus(letter);
    const statusStyle = getStatusStyle(status);
    const letterStyle = {
      padding: "6px 8px 6px 8px",
      margin: "1px 3px 0 3px",
      border: "black 2px solid",
      borderRadius: "10%",
      fontSize: "20px",
      backgroundColor: statusStyle.backgroundColor,
      textColor: statusStyle.textColor,
    };
    return letterStyle;
  }

  const rowStyle = { display: "flex", justifyContent: "center" };
  // default letterStyle with no status styling
  //   const letterStyle = {
  //     padding: "6px 8px 6px 8px",
  //     margin: "1px 3px 0 3px",
  //     border: "black 2px solid",
  //     borderRadius: "10%",
  //     fontSize: "20px",
  //   };

  const keyboardElement = keyboard.map((row, i) => {
    const keyElements = row.map((letter) => {
      const style = addLetterStyle(letter);
      return (
        <div key={letter} style={style}>
          {letter}
        </div>
      );
    });
    return (
      <div key={`keyboard-row-${i}`} style={rowStyle}>
        {keyElements}
      </div>
    );
  });

  return keyboardElement;
}
