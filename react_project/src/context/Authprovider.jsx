import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getLocalstorage, setLocalstorage } from "../utils/localStroage";


function AuthProvider({children}){
 
  let [userdata,setuserdata]=useState(null);

  useEffect(()=>{
    setLocalstorage()
    const {employee,admin}=getLocalstorage()
    setuserdata({employee,admin})
  },[]);
  
  return (
    
    <div>

      <AuthContext.Provider value={userdata}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;