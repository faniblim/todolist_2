import {EditableSpan} from "./EditableSpan";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan,
}

const changeCallback = action("Value changed");

export const EditableSpanBaseExample = () => {
    return <EditableSpan value={"Start value"} onChange={changeCallback}   />
}

