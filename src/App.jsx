import { Header } from "./components/Header";
import "./App.css";
import { LaunchesList } from "./components/LaunchesList";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const { launches, loading, error } = useLaunches();

  return (
    <>
      <Header />
      {error ? (
        `:( ${error.message}`
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <LaunchesList launches={launches} />
      )}
    </>
  );
}

export default App;
