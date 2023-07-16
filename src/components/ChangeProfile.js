import React from 'react'
import { useState } from 'react'
import { useContext } from "react";
import App, { AppContext } from "../App";

const ChangeProfile = (props) => {
    const [newUsername,setNewUsername]=useState("")
    const{setUsername}=useContext(AppContext)
  return (
    <div>
       <input onChange={(event)=>{setNewUsername(event.target.value)} } />
       <button onClick={()=>setUsername(newUsername)}>Change Username</button>
    </div>
  )
}

export default ChangeProfile
