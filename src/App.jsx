import { useState } from "react";
import "./styles/App.css";
import AgeWarning from "./components/AgeWarning";
import Home from "./components/Home";

function App() {
  const [ageAccepted, setAgeAccepted] = useState(false);

  if (!ageAccepted) {
    return <AgeWarning onAccept={() => setAgeAccepted(true)} />;
  }

  return <Home />;
}

export default App;


