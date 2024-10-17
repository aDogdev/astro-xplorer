import { useEffect, useState } from "react";
import { getAllLaunches } from "../services/launches";

function useLaunches() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      getAllLaunches().then((data) => setLaunches(data));
    } catch (e) {
      setError(e);
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  return { launches, loading, error };
}

export { useLaunches };
