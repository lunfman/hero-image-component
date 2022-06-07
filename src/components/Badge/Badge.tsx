import React from "react";

// Badge component with dynamic css so it can be easily customized by using props and place where required.
// badge contend should be placed as a prop.children

interface BadgeProps{
    right?: string,
    top?: string,
    background?: string,
    color?: string,
    fontSize?: string,
    children?: React.ReactNode
}

export default function Badge(props:BadgeProps){
   const {right, top, background, color, fontSize, children} = props
    const badgeStyle = {
        position: 'absolute',
        right: right ? right : '-22px',
        top: top ? top : '10px',
        background: background ? background : 'coral',
        textAlign: 'center',
        borderRadius: '30px 30px 30px 30px',
        color: color ? color : 'white',
        padding:'5px 10px',
        fontSize: fontSize ? fontSize : '15px',
    } as React.CSSProperties
    return(
        <span style={badgeStyle} data-testid='badge'>
        <div>
            {children}
        </div>

    </span>
    )
}