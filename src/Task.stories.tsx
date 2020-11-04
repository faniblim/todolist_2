import React from "react";
import {action} from "@storybook/addon-actions";
import {Task, TaskRpopsType} from "./Task";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Example/Task',
    component: Task,
}as Meta

const changeTaskStatusCallback = action("Status changed");
const changeTaskTitleCallback = action("Title changed");
const removeTaskCallback = action("Task changed");

const Template: Story<TaskRpopsType> = (args) => <Task {...args} />
const baseArgs = {
   changeTaskStatus: changeTaskStatusCallback,
   changeTaskTitle: changeTaskTitleCallback,
   removeTask: removeTaskCallback
}

export const IsNotCompletedTask = Template.bind({})
IsNotCompletedTask.args = {
    todolistId: "todolistId1",
    ...baseArgs,
    task:  {id: '1', isDone: true, title: 'CSS'}
}
export const CompletedTask = Template.bind({})
CompletedTask.args = {
    todolistId: "todolistId2",
    ...baseArgs,
    task: {id: '2', isDone: false, title: 'JS' }
}




// import React from "react";
// import {action} from "@storybook/addon-actions";
// import {Task} from "./Task";
//
// export default {
//     title: 'Task Component',
//     component: Task,
// }
//
// const changeTaskStatusCallback = action("Status changed");
// const changeTaskTitleCallback = action("Title changed");
// const removeTaskCallback = action("Task changed");
//
// export const TaskBaseExample = () => {
//     return <>
//         <Task
//             task={{id: '1', isDone: true, title: 'CSS' }}
//             changeTaskStatus={changeTaskStatusCallback}
//             changeTaskTitle={changeTaskTitleCallback}
//             removeTask={removeTaskCallback}
//             todolistId={"todolistId1"}
//         />
//         <Task
//             task={{id: '2', isDone: false, title: 'JS' }}
//             changeTaskStatus={changeTaskStatusCallback}
//             changeTaskTitle={changeTaskTitleCallback}
//             removeTask={removeTaskCallback}
//             todolistId={"todolistId2"}
//         />
//     </>
// }

