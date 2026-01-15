import React, { useState } from "react";
 

function CreateTask(){

  let[title,setTitle]=useState()
  let[Date,setdate]=useState()
  let[Category,setcategory]=useState()
  let[Description,setdiscriptin]=useState()
  let[Asign_to,setAsign_to]=useState()

 

const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    title,
    description: Description,
    date: Date,
    category: Category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  const employees = JSON.parse(localStorage.getItem("emp")) || [];

  const assignName = Asign_to.trim().toLowerCase();
  let employeeFound = false;

  const updatedEmployees = employees.map((emp) => {
    if (emp.firstName.toLowerCase() === assignName) {
      employeeFound = true;

      // ✅ push task correctly
      emp.tasks.push(task);

      // ✅ update counts
      emp.taskCounts = {
        ...emp.taskCounts,
        newTask: emp.taskCounts.newTask + 1,
      };
    }
    return emp;
  });

  if (!employeeFound) {
    alert("Employee not found!");
    return;
  }

  localStorage.setItem("emp", JSON.stringify(updatedEmployees));

  alert("Task created successfully!");

  setTitle("");
  setcategory("");
  setdate("");
  setdiscriptin("");
  setAsign_to("");
};


  return (<div>
    <div className="flex justify-center items-start font-bold text-white text-2xl ">
          <h2 >Create Task</h2>
        </div>
 
      <div >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="text-white mt-6 flex justify-between pr-12 pl-12 ">
        <div className=" w-[35%]  flex justify-center flex-col ">

          <h3  className="pt-3">Task Title</h3>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="make a UI design" className="border-2 border-white p-2 rounded-xl hover:bg-[#383535]" />
          <h3 className="pt-3 ">Date</h3>
          <input  value={Date} onChange={(e)=>{setdate(e.target.value)}} type="date" className="border-2 border-white p-2 rounded-xl hover:bg-[#383535]"  />
          <h3 className="pt-3">Asign to</h3>
          <input value={Asign_to} onChange={(e)=>{setAsign_to(e.target.value)}} type="text" placeholder="Employee name" className="border-2 border-white p-2 rounded-xl hover:bg-[#383535]" />
          <h3 className="pt-3">Category</h3>
          <input value={Category} onChange={(e)=>{setcategory(e.target.value)}} type="text" placeholder="Enter Category" className="border-2 border-white p-2 rounded-xl hover:bg-[#383535]"/>
          
        </div>

        <div className=" w-150 ">
            <h3 className="flex justify-start p-3 ">Description</h3>
            <textarea value={Description} onChange={(e)=>{setdiscriptin(e.target.value)}} name="" id="" cols={30} placeholder="Enter the detail decription here" className="border-2 border-white w-130 h-[55%] rounded-xl hover:bg-[#383535]" ></textarea>
           <button className=" px-2 py-2 bg-blue-500 rounded-xl mt-5 hover:bg-blue-800">Create Task</button>
        </div>
         

      </form>
      </div>
  </div>
    
  );
}

export default CreateTask;
