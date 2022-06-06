import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageTitle } from "./HeroTitle.stories";
import { HeroImageSubtitle } from "./HeroSubtitle.stories";

export default {
    title:'HeroImage-Components/HeroImage',
    component: HeroImage,
} as ComponentMeta<typeof HeroImage>

const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage{...args}/>

export const HeroImageComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageComponent.args = {
  imgUrl: "https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
};

export const HeroImageComponentWithTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageComponentWithTitle.args = {
  imgUrl: "https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  children: <HeroImageTitle {...HeroImageTitle.args}/>
};

export const HeroImageComponentWithTitleAndSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroImageComponentWithTitleAndSubtitle.args = {
  imgUrl: "https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  children: <><HeroImageTitle {...HeroImageTitle.args}/><HeroImageSubtitle {...HeroImageSubtitle.args}/></>
};