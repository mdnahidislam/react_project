import React from "react";
import auth from "../config/auth";


export const Logout = props =>{
    return(
       <div>
           <button onClick={()=>{
               auth.logout(()=>{
                   props.history.push("/");
               });
           }}>
               Logout
           </button>
       </div>
    )
}