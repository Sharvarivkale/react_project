import React, { useEffect, useState } from "react";
import { getLocalstorage } from "../../utils/localStroage";
import { getCurrentUser } from "../../utils/localStroage";
import { removeCurrentUser } from "../../utils/localStroage";

function Header({onLogOut}){
 let [username,setusername]=useState('')

 useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setusername(user.firstName); // ✅ logged-in user's name
    }
  }, []);

 


  return <div className="flex items-center justify-between p-10  pr-18 pb-5">
    <h1 className="font-medium text-2xl text-white pl-11">Hiii <br /><span className="font-semibold text-3xl">{username} 🤩</span></h1>
    <button className="px-2 py-2 bg-red-600 text-xl text-white rounded-xl hover:bg-red-800" onClick={()=>{
      removeCurrentUser();
      onLogOut();
    }}>Log Out</button>
  </div>
}

export default Header; 