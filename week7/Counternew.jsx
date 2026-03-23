import { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(16);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;

        if(running){
            timer = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [running]);

    function toggle(){
        setRunning(!running);
    }

    function Reset(){
        setCount(0);
        setRunning(false);
    }

    return(
        <div>
            <h1>Counter Component</h1>
            <p>Count: {count}</p>

            <button onClick={toggle}>
                {running ? "Stop" : "Start"}
            </button>

            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Counter;