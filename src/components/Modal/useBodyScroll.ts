import {useState } from "react"

/*
    This hook allows to save current body scroll position and scroll back to this position
        after modal closed.
    why? cause of fixed position in styling-> it works differently  across devices
        so we use this hook to save position other wise it will be scrolled to the top of the page.
    
    bodyBlockClass - class name of css class which is going to block body from scrolling
        when modal opened
    setScroller - function which saves current window scroll position 
    setBody - function used as a trigger to change modals class to open
    unMountBody - function used when body closed to reset class and scroll back to position

    setBody has a class to block it from moving while in modal mode!
*/
export default function useBodyScroll(bodyBlockClass = 'modal-open'){

    const [scrollDistance, setScrollDistance] = useState(0)
    
    const body = document.body
    
    const setBody = () => {
        body.classList.add(bodyBlockClass)
        body.style.top = `${scrollDistance * -1}px`
      }
    
    const unmountBody = () => {
        body.classList.remove(bodyBlockClass)
        body.style.top = ''
        window.scrollTo(0, scrollDistance)
        }

    const setScroller = () => {
        const distance = document.documentElement.scrollTop
        if(distance > 0){
            setScrollDistance(distance)
        } 
    }

    return{
        setScroller, unmountBody, setBody
    }
}
