import React from "react";
import Failed from "./FailedTask";
import NewTask from "./NewTask";
import Completed from "./completetask";
import Accept from "./AcceptTask";
import { getCurrentUser } from "../../utils/localStroage";

function Tasklistt(){
  const user=getCurrentUser()
  console.log(user)
  return (<div id="tasklistbar" className="h-[50%] w-full overflow-x-auto py-5 mt-8 flex justify-start items-center gap-5 flex-nowrap ">
   {user.tasks.map((task, index) => (
        <React.Fragment key={index}>
          {task.newTask && <NewTask task={task} />}
          {task.active && <Accept task={task} />}
          {task.completed && <Completed task={task} />}
          {task.failed && <Failed task={task} />}
        </React.Fragment>
      ))}
  </div>)
}

export default Tasklistt;