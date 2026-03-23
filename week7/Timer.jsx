import { useState, useEffect } from "react";

function Timer(){
    const[seconds, setSeconds]=useState(0);
    const[isrunning, setIsRunning]=useState(false);

    useEffect(() =>{
        let interval=null;
        if(isrunning){
            interval= setInterval(() => {
                setSeconds(seconds=> seconds + 1);
            }, 1000);
        }else if(!isrunning && seconds !==0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isrunning, seconds]);

    function Start(){
        setIsRunning(true);
    }

    return(
    <div>
    <h1>This is Timmer Component</h1>
    <p>Seconds: {seconds}</p>
    <button onClick={Start}>Start</button>
    <button onClick={() => setIsRunning(false)}>Stop</button>
    <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
    );
}export default Timer;