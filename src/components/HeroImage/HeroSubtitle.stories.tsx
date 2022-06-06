import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroSubtitle from "./HeroSubtitle";


export default {
    title:'HeroImage-Components/HeroSubtitle',
    component: HeroSubtitle,
} as ComponentMeta<typeof HeroSubtitle>

const Template: ComponentStory<typeof HeroSubtitle> = (args) => <HeroSubtitle{...args}/>

export const HeroImageSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageSubtitle.args = {
    children: 'My projects description ** 2 My projects description',
};

