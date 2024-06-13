import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { getAllLaunches } from "./services/launches";
import "./App.css";
import { LaunchesList } from "./components/LaunchesList";

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getAllLaunches().then((data) => setLaunches(data));
  }, []);
  return (
    <>
      <Header />
      <LaunchesList launches={launches} />
    </>
  );
}

export default App;
