import { useState } from "react";
// hook which detect if user clicked on outer fields which do not belong to the modal
export default function useOuterBoxClick(modalClassName:string){

    const [isOuterClick, setIsOuterClick] = useState(false)
    // https://stackoverflow.com/questions/43638516/get-class-name-of-element-from-mouseevent-target
    window.onclick = function(event) {
        if ((event.target as Element).className === modalClassName) {  
            setIsOuterClick(true)
        }
    }
    return{
        isOuterClick, setIsOuterClick
    }
}