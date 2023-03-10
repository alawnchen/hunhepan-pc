import nodeLogo from "./assets/node.svg";
import { useState } from "react";
import "./App.scss";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">hello</div>;
}

export default App;
