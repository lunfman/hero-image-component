import React from "react";
import { useState } from "react";
import Modal from "./Modal";

export default function ModalDemo(){
    const [isOpen, setIsOpen] = useState(false)
    
    const openMe = () => {
        setIsOpen(true)
    }

    const closeMe = () => {
        setIsOpen(false)
    }

    return(
        <>
        <button onClick={openMe}>Open modal</button>
        <Modal
            isOpen={isOpen}
            closeMe={closeMe}
        >
            <h1>Title of the modal</h1>
            <p>Some content</p>
        </Modal>
        </>
    )
}