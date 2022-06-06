import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroTitle from "./HeroTitle";


export default {
    title:'HeroImage-Components/HeroTitle',
    component: HeroTitle,
} as ComponentMeta<typeof HeroTitle>

const Template: ComponentStory<typeof HeroTitle> = (args) => <HeroTitle{...args}/>

export const HeroImageTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageTitle.args = {
    children: 'My Title'
};

