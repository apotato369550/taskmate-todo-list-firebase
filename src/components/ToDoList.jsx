import React, { useRef, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore"; // Import Firestore methods
import ToDoItem from "./ToDoItem";
import "./css/ToDoList.css"; // Import the CSS file

const ToDoList = ({ setLogin }) => {
  const [tasks, setTasks] = useState([]);
  const taskInput = useRef();
  const descriptionInput = useRef();
  const priorityInput = useRef(); // Ref for priority selection
  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async () => {
    const currentUser = auth.currentUser;

    let newTask = {
      name: taskInput.current.value,
      completed: false,
      priority: priorityInput.current.value, // Get priority from select
      description: descriptionInput.current.value,
      userId: currentUser ? currentUser.uid : null,
      userEmail: currentUser ? currentUser.email : null,
    };

    try {
      // Add task to Firestore and get the generated document reference
      const docRef = await addDoc(collection(db, "tasks"), newTask);
      // Use Firestore's document ID as the task ID
      newTask.id = docRef.id;

      // Add the new task (with the Firestore ID) to the state
      setTasks([...tasks, newTask]);
    } catch (err) {
      console.error("Error adding task to Firestore: ", err);
    }

    taskInput.current.value = "";
    descriptionInput.current.value = "";
    priorityInput.current.value = "4"; // Reset priority to default
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id)); // Delete task from Firestore
      setTasks(tasks.filter((task) => task.id !== id)); // Update state
    } catch (err) {
      console.error("Error deleting task from Firestore: ", err);
    }
  };

  const completeTask = async (id) => {
    try {
      // Update the Firestore document using the correct document ID
      await updateDoc(doc(db, "tasks", id), {
        completed: true,
      });

      // Update the task in local state
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    } catch (err) {
      console.error("Error updating task completion: ", err);
    }
  };

  const loadTasks = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    try {
      // Query tasks where the userId matches the current user
      const q = query(
        collection(db, "tasks"),
        where("userId", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);

      let loadedTasks = [];
      querySnapshot.forEach((doc) => {
        loadedTasks.push({ id: doc.id, ...doc.data() }); // Add tasks with Firestore's doc ID
      });

      setTasks(loadedTasks); // Set the state with loaded tasks
    } catch (err) {
      console.error("Error loading tasks from Firestore: ", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setLogin(null);
      navigate("/");
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  return (
    <div className="todo-container">
      <div className="header">
        <h1>TaskMate</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="task-inputs">
        <input
          type="text"
          placeholder="Type in a Task"
          ref={taskInput}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Task Description"
          ref={descriptionInput}
          className="input-field"
        />
        <select ref={priorityInput} className="priority-select">
          <option value="1">Priority 1</option>
          <option value="2">Priority 2</option>
          <option value="3">Priority 3</option>
          <option value="4" selected>
            Priority 4
          </option>
        </select>
        <button className="add-btn" onClick={createTask}>
          Add Task
        </button>
      </div>

      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available. Add a new task!</p>
        ) : (
          tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;
