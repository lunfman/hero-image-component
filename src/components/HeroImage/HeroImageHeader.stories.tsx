import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImageHeader from "./HeroImageHeader";

export default {
    title:'HeroImage-Components/HeroImageHeader',
    component: HeroImageHeader,
    parameters: {
        layout: 'fullscreen'
      },
} as ComponentMeta<typeof HeroImageHeader>

const Template: ComponentStory<typeof HeroImageHeader> = (args) => <HeroImageHeader{...args}/>

export const HeroImageHeaderComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageHeaderComponent.args = {
  imgUrl: "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
};

