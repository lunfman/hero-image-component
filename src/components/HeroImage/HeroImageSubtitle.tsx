import React from "react";

interface HeroSubtitleProps {
    children: React.ReactNode,
    fontSize?: string,
    fontWeight?: string
}

export default function HeroSubtitle(props: HeroSubtitleProps): JSX.Element{

    const {children, fontSize, fontWeight}  = props

    const subTitleStyle = {
        fontSize: fontSize ? fontSize : '2rem',
        fontWeight: fontWeight? fontWeight : '200',
        marginTop: '1rem',
    }

    return(
        <h2 style={subTitleStyle}>{children}</h2>
    )
}