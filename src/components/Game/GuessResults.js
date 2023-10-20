import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";
import GuessRow from "./GuessRow";

export default function GuessResults(props) {
  const guessRows = [];
  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    const currGuess = props.guessTracker[i];
    guessRows.push(
      <GuessRow
        key={currGuess?.id ?? crypto.randomUUID()}
        guessVal={currGuess?.value}
        answer={props.answer}
      />
    );
  }

  return <div className="guess-results">{guessRows}</div>;
}
