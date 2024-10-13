import React from "react";
import "./css/ToDoItem.css";

const ToDoItem = ({ task, deleteTask, completeTask }) => {
  return (
    <div className="todo-item">
      <div className="todo-header">
        <h3>{task.name}</h3>
        <p className={`priority ${task.priority}`}>
          {task.priority}
        </p>
      </div>
      <p className="description">{task.description}</p>
      <p className="completed-status">
        Completed: <span>{task.completed ? "Yes" : "No"}</span>
      </p>
      <div className="actions">
        <button
          className={`btn complete-btn ${task.completed ? "disabled" : ""}`}
          onClick={() => completeTask(task.id)}
          disabled={task.completed}
        >
          {task.completed ? "Completed" : "Complete Task"}
        </button>
        <button className="btn delete-btn" onClick={() => deleteTask(task.id)}>
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
