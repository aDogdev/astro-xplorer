import { useEffect, useState } from "react";
import { getAllLaunches } from "../services/launches";

function useLaunches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getAllLaunches().then((data) => setLaunches(data));
  }, []);
  return { launches };
}

export { useLaunches };
