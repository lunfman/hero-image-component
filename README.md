# @lunfman/react-components

Reuseable react components.
## HeroImage
Example:
```
import { HeroImage, HeroTitle, HeroSubTitle } from '@lunfman/react-components';

export default function Hero() {
  return (
    <HeroImage 
    imgUrl='/path'
    heroHeight='70vh'
    >
      <HeroTitle>
        Best Title
      </HeroTitle>
      <HeroSubTitle>
        Description of the project
      </HeroSubTitle>
    </HeroImage>

  );
}
```
### HeroImage - component which allow to create hero image in a seconds.

⚠️If you are using this component add the next line to css⚠️
```
body{
    margin: 0;
}
....
```

Required Prop:

`imgUrl` - path/url of the img

Optional Props:

`heroHeight`: by default heigh is equal to `100vh`. Nb use `vh` 

`titleColor`: color of the text inside HeroImage container

`children`: can be used to add title / subtitle or other content which will be displayed over the hero image

### HeroTitle - component which can be used as children prop in HeroImage to display title

```
<HeroTitle>
    Title of the project
<HeroTitle/>
```

Optional Props:
`fontSize`
`fontWeight`

### HeroSubTitle - component which can be used inside of the HeroImage after Title for description or another purpose.
Has the same props as HeroTitle
