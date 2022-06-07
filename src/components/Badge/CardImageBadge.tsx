import React from "react";
// container which allow to use badge  over the image which is in container.

interface CardImageBadgeProps{
    children?: React.ReactNode
}

const cardBadgeStyle = {
    position:'relative',
    paddingTop:'20px',
    display:'inline-block',
} as React.CSSProperties

export default function CardImageBadge(props: CardImageBadgeProps){
    return(
        <div style={cardBadgeStyle}>
            {props.children}
        </div>
    )
}