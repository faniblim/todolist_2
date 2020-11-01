import {TasksStateType} from "../App";
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string,
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    isDone: boolean
    todolistId: string
}
export type changeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string
    todolistId: string
    title: string
}


export type ActionsType = RemoveTaskActionType |
    AddTaskActionType |
    ChangeTaskStatusActionType |
    changeTaskTitleActionType |
    AddTodolistActionType |
    RemoveTodolistActionType

const initialState:TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case "ADD-TASK": {
            let todolistsTasks = state[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newTasks = [newTask, ...todolistsTasks];
            state[action.todolistId] = newTasks;
            return({...state});
        }
        case "CHANGE-TASK-STATUS": {
            let todolistsTasks = state[action.todolistId];
            state[action.todolistId] = todolistsTasks
                .map(t => t.id === action.taskId ?
                {...t, isDone: action.isDone}
                : t );
            return({...state});
        }
        case 'CHANGE-TASK-TITLE': {
            let todolistTasks = state[action.todolistId];
            state[action.todolistId] = todolistTasks
                .map(t => t.id === action.taskId
                    ? {...t, title: action.title}
                    : t);
            return ({...state});
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state};
            stateCopy[action.todolistId] = [];
            return stateCopy;
        }
        case "REMOVE-TODOLIST":{
            const stateCopy = {...state};
            delete stateCopy[action.id]
            return stateCopy;
        }
        default:
            // throw new Error("I don't understand this type")
            return state;
    }
}


export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', todolistId: todolistId, taskId: taskId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}


export const changeTaskStatusAC = (taskId: string,
                                   isDone: boolean,
                                   todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', isDone, todolistId, taskId}
}

export const changeTaskTitleAC = (taskId: string,
                                  todolistId: string,
                                  title: string): changeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, todolistId, title}
}




