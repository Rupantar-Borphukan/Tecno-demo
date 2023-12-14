import { useState } from "react";
import reactLogo from "./assets/Tecno23_nobg.png";
import viteLogo from "/Tecno23_Unoff_logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tecno '23</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Visitor is {count}
        </button>
        <p>Just Testing !!</p>
      </div>
      <p className="read-the-docs">To be Continue .........</p>
    </>
  );
}

export default App;
