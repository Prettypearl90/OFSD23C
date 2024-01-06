 import { React } from "react"
 import { useState } from "react";
 
 export default function Form() {
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    const [data,setData]=useState({});
function handleForm(e) {
    e.preventDefault();
    console.log("Form Submitted");
    //console.log("Updated",name,email);
    console.log("Updated",data);
}

   
    return <form onSubmit={handleForm}>
        <label>Enter your Name</label>
        <input type ="text" onChange={(e)=>{setData((previous)=>{ return {...previous,name:e.target.value}})}}/><br />
        <label>Enter your Email</label>
        <input type ="text" onChange={(e)=>{setData({...data,email:e.target.value})}}/><br />
        <input type="submit" value="Submit" />
    </form>
}