import React from "react";

interface HeroTitleProps {
    children: React.ReactNode,
    fontSize?: string,
    fontWeight?: string
}

export default function HeroTitle(props: HeroTitleProps): JSX.Element{
    const {children, fontSize, fontWeight} = props
    
    const titleStyle = {
        fontSize: fontSize ? fontSize : '3rem',
        fontWeight: fontWeight ? fontWeight : '600',
        marginBottom: '0',
        }
        return(
            <h1 style={titleStyle}>{children}</h1>
        )
    }
