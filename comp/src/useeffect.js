import { useEffect, useState } from "react";

 
 
 export default function Counting(params) {

    const [count,setCount] = useState(1);

    useEffect(()=>{ console.log("Screen Rendered");

    setTimeout(()=>{setCount((preState)=> {return preState+1})},1000)
})
   
    

    function update() {

        setCount((preState)=> {return preState+1})
        
    }


    return <>
    <p> Refresh {count} times</p>
    <button onClick={update}>Click</button>
    </>
    
}