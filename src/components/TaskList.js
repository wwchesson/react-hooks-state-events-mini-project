import React from "react";
import Task from "./Task"


function TaskList({tasks, onDeleteClick}) {
  const taskList = tasks.map((task) => {
      return (<Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteClick={onDeleteClick}
      />
      )
  })
  
  return (
    <div className="tasks">
      {taskList}
    </div>
    
  )
}

export default TaskList;
