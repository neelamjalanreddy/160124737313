import { useState, useEffect } from "react";

function Timernew() {
    const [seconds, setSeconds] = useState(0);
    const [isrunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isrunning) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isrunning]);

    const Start = () => {
        setIsRunning(!isrunning);
    };

    return (
        <div>
            <h1>This is Timer Component</h1>
            <p>Seconds: {seconds}</p>
            <button onClick={Start}>
                {isrunning ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default Timernew;