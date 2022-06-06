import { useState, useEffect, useCallback } from "react";
import useOuterBoxClick from "./useOuterBoxClick";
import useBodyScroll from "./useBodyScroll";

// useModalLogic hook has two arguments
//  --->   callback -> function which handles modal behaviour from the parent component
//  --->   isOpen -> state which check is it open in parent component

export default function useModalLogic(callback:()=>void, isOpen:boolean){
    const [open, setOpen] = useState(false)
    const {isOuterClick, setIsOuterClick} = useOuterBoxClick('modal')
    const {setScroller, unmountBody, setBody} = useBodyScroll()
    
    const handleCloseClick = useCallback(() => {
        callback()
  }, [callback])


    const handleClose = useCallback(() => {
        setOpen(false)
        unmountBody()
    }, [unmountBody])


    useEffect(()=>{
      if(isOuterClick){
        handleCloseClick()
        setIsOuterClick(false)
      }

    }, [isOuterClick, handleCloseClick, setIsOuterClick])

    useEffect(()=> {
        setOpen(isOpen)

        if(isOpen){
          setScroller()
        }else{
            handleClose()
        }

    }, [isOpen, handleClose, setScroller])

    useEffect(() => {
        if(open){
            setBody()
        }
    }, [open, setBody])

    return{
        open,
        handleCloseClick
    }
}