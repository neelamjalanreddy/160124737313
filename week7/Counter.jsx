import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(16);
    function Reset(){
        setCount(count - count);
    }

    return(
        <div>
            <h1>this is Counter Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incement</button>
            <button onClick={Reset}>ResetCount</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}export default Counter;