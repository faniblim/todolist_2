import React from "react";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {ReduxStoreProviderDecorator} from "./stories/decorators/ReduxStoreProviderDecorator";
import {Meta, Story} from "@storybook/react";



export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}as Meta

const Template: Story = () => <AppWithRedux />

export const BaseExample = Template.bind({})
BaseExample.args = {}


// import React from "react";
// import {action} from "@storybook/addon-actions";
// import AppWithRedux from "./AppWithRedux";
// import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";
//
//
//
// export default {
//     title: 'AppWithRedux Component',
//     component: AppWithRedux,
//     decorators: [ReduxStoreProviderDecorator]
// }
//
// export const AppWithReduxBaseExample = () => {
//     return <AppWithRedux />
// }

