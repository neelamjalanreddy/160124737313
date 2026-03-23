import { useState } from  "react";

function Str(){
    const[name,setString]=useState("");

    return(
        <div>
            <input type="text" id="Text1" placeholder="Enter Text"></input>
            <button onChange={() => setString("hello"+Text1,value)}>Change</button>
            <h1>Text: { name }</h1>
        </div>
    );
}export default Str