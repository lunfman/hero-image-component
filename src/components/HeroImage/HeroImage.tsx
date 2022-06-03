import React from "react";

interface HeroImageProps{
    imgUrl: string,
    children?: React.ReactNode,
    heroHeight?: string,
    titleColor?: string
}


// by default height is 100% of the screen -> 100vh
export default function HeroImage(props: HeroImageProps): JSX.Element{

    const {imgUrl, children, heroHeight, titleColor} = props

    const heroStyle = {
        backgroundImage: imgUrl && `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgUrl})`,
        width: '100vw',
        height: heroHeight ? heroHeight : '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center' as const,
        color: titleColor ? titleColor : 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }

    return(
        <section  style={heroStyle} data-testid='heroImage'>
            <div>
                {children}
            </div>
        </section>
    )
}