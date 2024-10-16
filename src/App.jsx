import { Header } from "./components/Header";
import "./App.css";
import { LaunchesList } from "./components/LaunchesList";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const { launches } = useLaunches();

  return (
    <>
      <Header />
      <LaunchesList launches={launches} />
    </>
  );
}

export default App;
