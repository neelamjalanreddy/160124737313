import React, {useEffect,useState} from 'react'

const Link = () => {
    const link="https://jsonplaceholder.typicode.com/posts"
    const[show,setShow] = useState([]);

    const showData = async (apiCall) =>{
        const response = await fetch(apiCall);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setShow(data);
    }
    useEffect(function()
    {
    showData(link);
    },[]);
    
    return(
        <div className="container">
            {
                show.map(function(list){
                    return(
                        <div>
                            <h2>{list.title}</h2>
                            <p>{list.body}</p>
                        </div>
                    );
                })
            }           
        </div>
    );
}
export default Link;