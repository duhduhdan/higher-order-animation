# Higher Order Animation Components (HOAC)
Higher order animation components for [React Native](https://github.com/facebook/react-native).

HOACs accept a default props object for persisting animations throughout the app. This, however, is optional and you may manually declare props on the component if you desire.

There are no additional dependencies outside of the React Native ecosystem at this time.

## Animations

### FadeInUpOnMount
Lowers opacity and moves component along the y-axis on `componentDidMount`

#### props (all required)
* translateTo
* translateDuration
* opacityTo
* opacityDuration
* inputRange
* outputRange

### FadeInOnMount
Lowers opacity on `componentDidMount`

#### props (all required)
* opacityTo
* opacityDuration

## Examples

### Persistent animation
Only a one time setup of defaultProps is required and will animate consistently across multiple invocations of a single component.

```javascript
import React, {
  ...
} from 'react-native'

import FadeInUpOnMount from 'path/to/fadeInUpOnMount.ios'

const props = {
  translateTo: 1,
  translateDuration: 600,
  opacityTo: 1,
  opacityDuration: 800,
  inputRange: [0, 1],
  outputRange: [15, 0],
}

const Title = ({ title }) => (
  <Text style={{fontSize: 40}}>
    {`${title}`.toUpperCase()}
  </Text>
)

export default FadeInUpOnMount(Title, props)
```

### Non-persistent animation
Manually declare animation props on component invocation. Not recommended if you want consistent animations app wide on a single component.

```javascript
import React, {
  ...
} from 'react-native'

import CardItem from 'card/item/path'
import Button from 'button/path/button.ios'
import FadeInOnMount from 'path/to/fadeInOnMount.ios'

const AnimButton = FadeInOnMount(Button)

const Card = ({ person }) => (
  <CardItem>
    <Text style={{fontSize: 30}}>
      {`${person}`.toUpperCase()}
    </Text>
    <AnimButton
      opacityTo={1}
      opacityDuration={800}
    />
  </CardItem>
)
```

## HOAC Todos

This is in an early concept stage right now, I mostly want to see if this can be a useful pattern or not.

#### Animations
* Parallax scrolling
* Interesting menu opening transitions
* Page transitions
* Blur background
* ...

#### Housekeeping
* Examples
* Gifs
* Unit tests
* Explanation of what I'm trying to solve
* ...

***

#### Additional resources
* [Higher order components](http://natpryce.com/articles/000814.html)
* [Animating in React Native](http://browniefed.com/react-native-animation-book/INTERNALS.html)
