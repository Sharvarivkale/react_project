import React from "react";
import { getCurrentUser } from "../../utils/localStroage";


function Completed({task}){
  const user=getCurrentUser()
  
  return <>
   <div className="h-full w-[250px]  bg-blue-400 rounded-xl shrink-0 p-2">
       <div className="flex justify-between items-center text-white">
        <button className="bg-red-600 rounded-sm px-2 py-1">{task.category}</button>
        <h4 className="font-bold">{task.date}</h4>
      </div>
      <div className="text-white text-2xl font-bold pt-3 flex justify-center">
        <h2>{task.title}</h2>
      </div>
      <div className="text-white flex justify-center p-2 m-2">
        <p>{task.description}</p>
      </div>
      <div className="flex justify-center w-full  text-white pt-3 mb-2">
        <button className=" bg-blue-600 rounded-sm px-8 hover:bg-blue-900  ">completed</button>
        
      </div>
    </div>
  </>
}

export default Completed;