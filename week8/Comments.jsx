import React, {useEffect,useState} from 'react'

const Comments = () => {
    const link="https://jsonplaceholder.typicode.com/Comments"
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
                            <h2>{list.name}</h2>
                            <p>{list.email}</p>
                            <p>{list.body}</p>
                            <p>{list.id}</p>
                        </div>
                    );
                })
            }           
        </div>
    );
}
export default Comments;