import "./Tag.css";

function Tag({ isSuccess }) {
  const missionState = isSuccess ? "success" : "failure";
  return <span className={missionState}>{missionState.toUpperCase()}</span>;
}

export { Tag };
