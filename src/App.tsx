import React, {useState} from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskStateType = {
    [key: string]: Array<TaskType>
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    function removeTask(id: string, todolistId: string) {
        let TodolistTasks = tasks[todolistId];
        tasks[todolistId] = TodolistTasks.filter(t => t.id !== id);
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let TodolistTasks = tasks[todolistId];
        tasks[todolistId] = [task, ...TodolistTasks];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let TodolistTasks = tasks[todolistId];
        let task = TodolistTasks.find((t) => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }

    }

    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        let TodolistTasks = tasks[todolistId];
        let task = TodolistTasks.find((t) => t.id === taskId);
        if (task) {
            task.title = newTitle;
            setTasks({...tasks});
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"},
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GrahhQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Book", isDone: false},
            {id: v1(), title: "Milk", isDone: true},
        ]
    })

    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id !== id));
        delete tasks[id];
        setTasks({...tasks});
    }

    function changeTodolistTitle(id: string, newTitle: string) {
        const todolist = todolists.find(tl => tl.id === id);
        if (todolist){
            todolist.title = newTitle;
            setTodolists([...todolists]);
        }
    }

    function addTodolist(title: string) {
        let newTodolistId = v1();
        let newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'};
        setTodolists([newTodolist, ...todolists]);
        setTasks({
            ...tasks,
            [newTodolistId]: []
        })
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksFortodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksFortodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksFortodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }
                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksFortodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        changeTaskTitle={changeTaskTitle}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                })
            }
        </div>
    );
}

export default App;
