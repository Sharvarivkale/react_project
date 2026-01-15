import React from "react";
import Header from "../others/header";
import CreateTask from "../others/createTask";
import Alltask from "../others/admin_user_task";


function AdmimDash({onLogOut}){
  return (
    <div className="bg-[#1c1c1c] h-screen w-full ">
      <Header onLogOut={onLogOut}/>

      <CreateTask/>
      <Alltask/>
    </div>
  )
}

export default AdmimDash;