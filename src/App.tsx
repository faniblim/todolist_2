import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GrahhQL", isDone: false },
  ]);
  console.log(tasks);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksFortodolist = tasks;
  if (filter === "active") {
    tasksFortodolist = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    tasksFortodolist = tasks.filter((t) => t.isDone === true);
  }

  function addTask(title: string) {
    let task = { id: v1(), title: title, isDone: false };
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    debugger;
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksFortodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
