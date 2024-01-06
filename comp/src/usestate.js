
import React, { useState } from "react"

// Initialize and update state

        // export default function Hooks()
        // {
        //     //let name="Del";
        //     const [name,setName]=useState("Del");
        //     return <><><h1>Product Details</h1>
        //     <p>Product Name: {name}</p></>
        //     <button  onClick={()=>{setName("hp")}}>Chnage Product name</button></>
        // }

//Create multiple state

        //export default function Laptop() {
            
            // const [name, setName] = useState("hp");
            // const [id, setId] = useState(111);
            // const [price, setPrice] = useState(50000);
       
      //  // state with objects and arrays

      //       const [data,setData]=useState({name:"hp",id:111,price:50000})
        
      //       //function updateData() // function
      //       const updateData=() => // arrow function
      //       {
      //       //setData({name:"del",id:222,price:55000})
      //       //setData({price:65000})

      //       setData(previousState => // callback 
      //           {
      //               return {...previousState,price:65000} // returning object
      //           } )
  
      //       }

      //       // To check current state of object
      //       console.log("current state",data);
            
        //     return (
        //     <>
        //         <h1>Product Details</h1>
            
        //     <table>
        //         <tr>
        //             <td>P-Name</td>
        //             {/* <td>{name}</td> */}
        //             <td>{data.name}</td>
        //         </tr>
        //         <tr>
        //             <td>P-ID</td>
        //             {/* <td>{id}</td> */}
        //             <td>{data.id }</td>
        //         </tr>
        //         <tr>
        //             <td>P-Price</td>
        //             {/* <td>{price}</td> */}
        //             <td>{data.price}</td>
        //         </tr>
        //     </table>

        //     <button onClick={updateData}>Update details</button>

        //     </>
            
        //     )
        // }
        
        // Task

      //  export default function Counter() {

      //   const [count, setCount] = useState(0);

      //   const handleIncrement = () => {
      //       setCount(count + 1);
      //     };

      //   const handleDecrement = () => {
      //       if (count==0) {

            
                
      //       } else {
      //           setCount(count - 1);
      //       }
           
      //     };  

      //   const path='https://t4.ftcdn.net/jpg/05/07/00/03/360_F_507000363_tfzdJrG9A1ims4ucbGWDr8YLOYzowomi.jpg';
            
      //   return <><img src={path} alt="Food Item" width={100} /><br/><button onClick={handleIncrement}>+</button><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><button onClick={handleDecrement}>-</button></>
      //   }