import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const authContext = createContext();
const authContext=(props)=>
{
    const [isLoggedIn,setIsLoggedIn]=useState();
    
    
}