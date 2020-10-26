import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, Grid, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

export type PropsType = {
    id: string
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: string, todolistId: string) => void;
    changeFilter: (value: FilterValuesType, todolistId: string) => void;
    addTask: (title: string, todolistId: string) => void;
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void;
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void;
    filter: FilterValuesType
    removeTodolist: (id: string) => void;
    changeTodolistTitle: (id: string, newTitle: string) => void;
};

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.id);
    };

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    const changeTodolistTitle = (newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActivelickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);


    return (
        <div>
            <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                {/*<button onClick={removeTodolist}>x</button>*/}
                <IconButton onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {props.tasks.map((t) => {
                    const onClickHandler = () => props.removeTask(t.id, props.id);
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                    };
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    };
                    return (
                        <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            < Checkbox
                                onChange={onChangeStatusHandler}
                                color="secondary"
                                checked={t.isDone}/>
                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler}/>
                            {/*<button onClick={onClickHandler}>x</button>*/}
                            <IconButton onClick={onClickHandler}>
                                <Delete/>
                            </IconButton>
                        </li>
                    );
                })}
            </div>
            <div>
                <Grid container style={{padding: "10px"}}>
                <Button variant={props.filter === 'all' ? "contained" : "text"}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={"primary"} variant={props.filter === 'active' ? "contained" : "text"}
                        onClick={onActivelickHandler}>Active
                </Button>
                <Button color={"secondary"} variant={props.filter === 'completed' ? "contained" : "text"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
                </Grid>
            </div>
        </div>
    );
}

