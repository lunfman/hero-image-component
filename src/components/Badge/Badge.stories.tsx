import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
    title: 'Badge/Badge',
    component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge{...args}/>

export const BadgeComponentPrimary = Template.bind({})
BadgeComponentPrimary.args = {
    children: <p>New</p>,
    right: '1'
}

export const BadgeComponentCustom = Template.bind({})
BadgeComponentCustom.args = {
    right: '1',
    background: 'red',
    children: <p>New</p>,
    color: 'white',
    fontSize: '2rem',
}