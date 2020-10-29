import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasks-reducer";
import {TasksStateType} from "../App";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
            // {id: v1(), title: "CSS", isDone: true },
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = removeTaskAC("2", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
});


test('correct task should be added to correct array', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = addTaskAC("=(^&_&^)=", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("=(^&_&^)=");
    expect(endState["todolistId2"][0].isDone).toBe(false);
})


test('status of specified task should be changed', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = changeTaskStatusAC("2", false, "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][1].isDone).toBeFalsy();
    expect(endState["todolistId1"][1].isDone).toBeTruthy();
});


test('title of specified task should be changed', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = changeTaskTitleAC("2", "todolistId2", "=(^&_&^)=");
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][1].title).toBe("=(^&_&^)=");
    expect(endState["todolistId1"][1].title).toBe("JS");
});


test('new property with new array should be added when todolist is added', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = addTodolistAC("any title");

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});


test('property with todolistId should be deleted', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "=(^-.-^)=", isDone: false},
            {id: "2", title: "=(^*_*^)=", isDone: true},
            {id: "3", title: "=(^*.*^)=", isDone: false},
        ]
    };

    const action = removeTodolistAC("todolistId2");
    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined();
});

