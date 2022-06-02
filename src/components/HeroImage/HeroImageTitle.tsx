import React from "react";

interface HeroTitleProps {
    children: React.ReactNode
    titleFontSize?: string,
    titleWeight?: string
}

export default function HeroTitle(props: HeroTitleProps): JSX.Element{
    const {children, titleFontSize, titleWeight} = props
    
    const titleStyle = {
        fontSize: titleFontSize ? titleFontSize : '3rem',
        fontWeight: titleWeight ? titleWeight : '600',
        marginBottom: '0',
        }
        return(
            <h1 style={titleStyle}>{children}</h1>
        )
    }
