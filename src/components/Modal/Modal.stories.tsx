import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
export default {
    title:'Modal-Component/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal{...args}/>

export const ModalComponent = Template.bind({})
ModalComponent.args = {
    isOpen: true,
    closeMe: () => ('test'),
    children: <p>Modals inner content</p>
}