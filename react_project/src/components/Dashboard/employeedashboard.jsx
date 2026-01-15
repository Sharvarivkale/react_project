import React from "react";
import Header from "../others/header";
import Tasklistnum from "../others/Tasklistnum";
import Tasklistt from "../Tasklist/Tasklistt";


function EmpDAsh({onLogOut}) {
  return <div>
    <div className="bg-[#1c1c1c] w-screen h-screen" >
      <Header onLogOut={onLogOut}/>
      <Tasklistnum />
      <Tasklistt></Tasklistt>
  
    </div>
  </div>
  
}

export default EmpDAsh;