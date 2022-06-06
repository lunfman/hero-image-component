import React from "react";
import './modal.css'
import useModalLogic from "./useModalLogic";

// props -> isOpen -> prop which should be boolean the idea when click on button change the state and pass here
// closeMe the prop = function which is going to reset open to false in outer function
// prop change => takes curArgs in this app -> if arr of args changed scroll to the top other wise stay in the same place!
// https://stackoverflow.com/questions/54786905/how-to-disable-body-scrolling-when-modal-is-open-ios-only
// thanks for help with ios DDD....DDD

interface ModalProps{
  isOpen:  boolean,
  closeMe: () => void,
  children: React.ReactNode
}

export default function Modal(props: ModalProps): JSX.Element{
  const {closeMe, isOpen, children} = props
  const {open, handleCloseClick} = useModalLogic(closeMe, isOpen)

  const style = {
      'display': open ? 'block': 'none'
  }

    return(
        <div className='modal' style={style} data-testid='modal'>
          <div className="modal-content" >
            <span onClick={handleCloseClick} className="close" data-testid='close-btn'>&times;</span>
            {children}
          </div>
        </div>
    )
} 