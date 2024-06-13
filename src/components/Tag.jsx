import "./Tag.css";

function Tag({ isSuccess }) {
  const missionState = isSuccess ? "Success" : "Failure";
  return <span className={missionState}>{missionState}</span>;
}

export { Tag };
