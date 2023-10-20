import { checkGuess } from "/src/game-helpers.js";

export default function GuessRow(props) {
  // compare guess to answer
  const guessOutcome = props.guessVal
    ? checkGuess(props.guessVal, props.answer)
    : [];

  // create array from the guess -> those 5 characters or 5 empty characters
  const lettersArray = props.guessVal
    ? props.guessVal.split("")
    : ["", "", "", "", ""];
  const letters = lettersArray.map((letter, i) => {
    return {
      id: crypto.randomUUID(),
      value: letter,
      status: guessOutcome[i]?.status,
    };
  });
  const lettersElements = letters?.map((letter) => {
    return (
      <span className={`cell ${letter.status}`} key={letter.id}>
        {letter.value}
      </span>
    );
  });

  return <p className="guess">{lettersElements}</p>;
}
