# @lunfman/react-components

Reuseable react components.

## HeroImage - component which allow to create hero image in a seconds.

!!If you are using this component add the next line to css
```
body{
    margin: 0;
}
....
```

Required Prop: imgUrl - path/url of the img

Optional Props:

`heroHeight`: by default heigh is equal to `100vh`. Nb use `vh` 

`titleColor`: color of the text inside HeroImage container

`children`: can be used to add title / subtitle or other content which will be displayed over the hero image

## HeroTitle - component which can be used as children prop in HeroImage to display title

```
<HeroTitle>
    Title of the project
<HeroTitle/>
```

Optional Props:
`titleFontSize`: font size
`titleWeight`: font weight

## HeroSubTitle - component which can be used inside of the HeroImage after Title for description or another purpose.

Optional Props:
`titleFontSize`: font size
`titleWeight`: font weight