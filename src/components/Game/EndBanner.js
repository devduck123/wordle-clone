export default function EndBanner(props) {
  const win = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{props.numOfGuesses} guesses</strong>.
      </p>
    </div>
  );
  const loss = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{props.answer}</strong>.
      </p>
    </div>
  );

  return props.gameStatus === "win" ? win : loss;
}
