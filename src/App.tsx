import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Rest API", isDone: false},
        {id: 6, title: "GrahhQL", isDone: false},

    ])
    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksFortodolist = tasks;
    if (filter === "active") {
        tasksFortodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksFortodolist = tasks.filter(t => t.isDone === true);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksFortodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
