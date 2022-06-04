import React from "react";
import HeroImage from './HeroImage'
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";

interface HeroImageHeaderProps{
    imgUrl: string,
    title?: string,
    subtitle?: string,
}

export default function HeroImageHeader(props: HeroImageHeaderProps): JSX.Element{
    const {imgUrl, title, subtitle} = props

    return(
        <HeroImage imgUrl={imgUrl}>
            <HeroTitle>{title}</HeroTitle>

            <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroImage>
    )
}