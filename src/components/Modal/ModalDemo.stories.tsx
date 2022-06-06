import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalDemo from "./ModalDemo";
export default {
    title:'Modal-Component/ModalDemo',
    component: ModalDemo,
} as ComponentMeta<typeof ModalDemo>

const Template: ComponentStory<typeof ModalDemo> = (args) => <ModalDemo/>

export const ModalDemoComponent = Template.bind({})
