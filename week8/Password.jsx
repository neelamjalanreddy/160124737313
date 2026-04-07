import React, {useEffect,useState} from 'react'

function Password(){
    const[password,setPassword]=useState("");

    const getStrength = (pwd) =>{
        if(!pwd) return "";
        if(pwd.length < 6) return "Weak Password";
        if(/(?=.*[a-z])(?=.*\d).{8,}/.test(pwd)) return "Strong Password";
        return "Moderate Password";
    };

    const handleChange=(event)=>{
        setPassword(event.target.value);
    }

    return(
        <div className="container">
            <center>
                <h1>Password Strength Checker</h1>
                <input type="password" placeholder="Enter here" onChange={handleChange}/>
                <h3>{getStrength(password)}</h3>
            </center>
        </div>
    );
}export default Password;