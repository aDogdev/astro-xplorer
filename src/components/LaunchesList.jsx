import { Launches } from "./LaunchItem";
import "./LaunchesList.css";

function LaunchesList({ launches }) {
  return (
    <ul className="launches-list">
      <Launches launches={launches} />
    </ul>
  );
}

export { LaunchesList };
