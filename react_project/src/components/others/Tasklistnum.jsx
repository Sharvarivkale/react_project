import React, { useContext } from "react";
import { getCurrentUser } from "../../utils/localStroage";





function Tasklistnum(){
  const user=getCurrentUser();
  
  return (
    <div className="flex justify-between gap-5 mt-10 pb-5" >
      <div className="w-[45%] bg-red-500 px-6 py-10 rounded-2xl">
        <h2 className="text-white text-3xl">{user.taskCounts.newTask}</h2>
        <h3 className="text-white text-2xl">New Work</h3>
      </div>
      <div className="w-[45%] bg-blue-500 px-6 py-10 rounded-2xl">
        <h2 className="text-white text-3xl">{user.taskCounts.completed}</h2>
        <h3 className="text-white text-2xl">completed work</h3>
      </div>
      <div className="w-[45%] bg-green-500 px-6 py-10 rounded-2xl">
        <h2 className="text-white text-3xl">{user.taskCounts.active}</h2>
        <h3 className="text-white text-2xl">Active work</h3>
      </div>
       <div className="w-[45%] bg-yellow-500 px-6 py-10 rounded-2xl">
        <h2 className="text-white text-3xl">{user.taskCounts.failed}</h2>
        <h3 className="text-white text-2xl">Failed work</h3>
      </div>
    </div>
  )
}

export default Tasklistnum; 