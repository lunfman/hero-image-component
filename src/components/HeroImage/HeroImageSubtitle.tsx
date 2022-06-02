import React from "react";

interface HeroSubTitleProps {
    children: React.ReactNode,
    subTitleFontSize?: string,
    subTitleFontWeight?: string
}

export default function HeroSubTitle(props: HeroSubTitleProps): JSX.Element{

    const {children, subTitleFontSize, subTitleFontWeight}  = props

    const subTitleStyle = {
        fontSize: subTitleFontSize ? subTitleFontSize : '2rem',
        fontWeight: subTitleFontWeight? subTitleFontWeight : '200',
        marginTop: '1rem',
    }

    return(
        <h2 style={subTitleStyle}>{children}</h2>
    )
}