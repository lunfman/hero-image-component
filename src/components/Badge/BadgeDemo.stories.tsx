import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BadgeDemo from "./BadgeDemo";

export default {
    title: 'Badge/BadgeDemo',
    component: BadgeDemo
} as ComponentMeta<typeof BadgeDemo>

const Template: ComponentStory<typeof BadgeDemo> = (args) => <BadgeDemo/>

export const BadgeDemoComponent = Template.bind({})
