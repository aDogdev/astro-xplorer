import { LaunchItem } from "./LaunchItem";
import "./LaunchesList.css";

function LaunchesList({ launches }) {
  return (
    <ul className="launches-list">
      {launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </ul>
  );
}

export { LaunchesList };
