import React,{useState,useEffect}from 'react'
import axios from "axios"

function App(){

  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")     
    .then(res=>setData(res.data.data))
    .catch(err=>console.log(err))
 },[])
  return(
    
    <div>
    
      {
        data.map((d,i)=>{
          return <p key={i}>{d.email}</p>
        }

        )
      }
    
    </div>
  )
}

export default App;
