import { useState, useCallback } from "react";
import { workerInstance, blockingFunc, randomIntFromInterval } from "./utils";
import "./App.css";

function App() {
  const [random, setRandom] = useState(0);
  const workerCall = useCallback(async () => {
    await workerInstance.someRPCFunc();
  }, []);

  const normalFuncCall = useCallback(() => {
    blockingFunc();
  }, []);

  const randomIntHandler = useCallback(() => {
    setRandom(randomIntFromInterval(1, 100));
  }, []);

  return (
    <>
      <div>simple web worker app in vite</div>
      <section>
        <button onClick={workerCall}>worker call</button>
        <button onClick={normalFuncCall}>Main thread call</button>
        <button onClick={randomIntHandler}>Random Int {random} </button>
      </section>
    </>
  );
}

export default App;
