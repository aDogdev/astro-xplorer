import "./LaunchesList.css";

function LaunchesList({ launches }) {
  return (
    <ul className="launches-list">
      {launches.map((launch) => (
        <li className="launches-card" key={launch.id}>
          <h3>{launch.name}</h3> <small>({launch.date_utc.slice(0, 4)})</small>
        </li>
      ))}
    </ul>
  );
}

export { LaunchesList };
