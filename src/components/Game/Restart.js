export default function Restart(props) {
  const containerStyle = { textAlign: "center" };
  const buttonStyle = {
    fontSize: "24px",
    border: "2px solid black",
    borderRadius: "8%",
    padding: "8px 12px 8px 12px",
    margin: "1px",
    background: "orange",
  };

  return (
    props.isEndOfGame && (
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={props.restart}>
          Restart
        </button>
      </div>
    )
  );
}
