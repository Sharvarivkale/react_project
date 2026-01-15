import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Alltask(){
  const Authdata=useContext(AuthContext)
 
  return(
      <div id="tasklistbar" className=" w-full h-[29%] mt-3 flex flex-col gap-1 overflow-y-auto">
        <div className="bg-[#FFC0CB] w-full h-10 flex justify-between font-bold text-white p-2 shrink-0">
           <h3 className="w-[50px] text-black">Name</h3>
           <h5 className="w-[150px] text-green-800">Active Task</h5>
           <h5 className="w-[150px] text-blue-800">Completed Task</h5>
           <h5 className="w-[150px] text-yellow-800">Failed Task</h5>
           <h5 className="w-[150px] text-red-800">NewTask</h5>
        </div>
 
        <div id="tasklistbar" className=" w-full h-full  flex flex-col gap-1 overflow-y-auto">
          {Authdata.employee.map(function(emp,index){
            return <div key={index} className=" w-full h-10 flex justify-between font-bold text-white p-2 shrink-0 gap-1 border-1">
           <h3 className="w-[50px] text-white">{emp.firstName}</h3>
           <h5 className="w-[150px] text-green-600">Active Task: {emp.taskCounts.active}</h5>
           <h5 className="w-[150px] text-blue-400">Completed Task: {emp.taskCounts.completed}</h5>
           <h5 className="w-[150px] text-yellow-600">Failed Task: {emp.taskCounts.failed}</h5>
           <h5 className="w-[150px] text-[#FC94AF]">NewTask: {emp.taskCounts.newTask}</h5>
        </div>
          })}
        </div>
      </div>

 
    
  
  )
}

export default Alltask;