import React from "react";
import GuessForm from "./GuessForm";
import GuessResults from "./GuessResults";
import EndBanner from "./EndBanner";
import Keyboard from "./Keyboard";
import Restart from "./Restart";

import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // track guesses as array of "Guess" objects
  // object shape: {id: string, value: string}
  const [guessTracker, setGuessTracker] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  function addGuessToTracker(inputGuess) {
    setGuessTracker((guessTracker) => {
      const newGuess = { id: crypto.randomUUID(), value: inputGuess };
      const newGuessTracker = [...guessTracker, newGuess];

      return newGuessTracker;
    });
    if (inputGuess === answer) {
      setGameStatus(() => "win");
    }
  }

  function isEndOfGame() {
    if (gameStatus === "win") {
      return true;
    }

    if (guessTracker.length < NUM_OF_GUESSES_ALLOWED) {
      return false;
    } else {
      return true;
    }
  }

  function restart() {
    setGuessTracker(() => []);
    setGameStatus(() => "");
    setAnswer(() => sample(WORDS));
    window.triggerResetForm = "true";
  }

  return (
    <>
      <GuessResults guessTracker={guessTracker} answer={answer} />
      {isEndOfGame() && (
        <EndBanner
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={guessTracker.length}
        />
      )}
      <Restart isEndOfGame={isEndOfGame()} restart={restart} />
      <GuessForm
        addGuessToTracker={addGuessToTracker}
        isEndOfGame={isEndOfGame()}
      />
      <Keyboard guessTracker={guessTracker} answer={answer} />
    </>
  );
}

export default Game;
