// import {AddItemForm} from "./AddItemForm";
// import React from "react";
// import {action} from "@storybook/addon-actions";
// import {Meta, Story} from "@storybook/react";
//
// export default {
//     title: 'AddItemForm Component',
//     component: AddItemForm,
//     // argTypes: {
//     //     addItem: (title: string) => {
//     //     }
//     // }
// // }
// } as Meta;
//
// const Template: Story<AddItemFormPropsType> = < args) => <AddItemForm{} />;
// export const Primary  = Template.bind({});
// )rimary.args = {
//     addItem: action("Button inside form clicked")
// }
//
// const callback = action("Button 'add' was pressed inside the form");
//
// export const AddItemFormBaseExample = (props: any) => {
//     return <AddItemForm addItem={callback}   />
// }


import {AddItemForm} from "./AddItemForm";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
}

const callback = action("Button 'add' was pressed inside the form");

export const AddItemFormBaseExample = (props: any) => {
    return <AddItemForm addItem={callback}   />
}