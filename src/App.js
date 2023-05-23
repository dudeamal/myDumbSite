import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Inc
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Dec
      </button>
    </div>
  );
};

export default App;
