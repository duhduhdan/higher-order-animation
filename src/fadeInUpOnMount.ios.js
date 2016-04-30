import React, {
  Animated,
  Component,
  PropTypes,
} from 'react-native'

const FadeInUpOnMount = (Wrapped, animConfig) => class extends Component {
  static defaultProps = animConfig || {}
  static propTypes = {
    translateTo: PropTypes.number.isRequired,
    translateDuration: PropTypes.number.isRequired,
    opacityTo: PropTypes.number.isRequired,
    opacityDuration: PropTypes.number.isRequired,
    inputRange: PropTypes.array.isRequired,
    outputRange: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      yAxis: new Animated.Value(0),
      fadeIn: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const {
      translateTo,
      translateDuration,
      opacityTo,
      opacityDuration,
    } = this.props

    Animated.parallel([
      Animated.timing(this.state.yAxis, {
        toValue: translateTo,
        duration: translateDuration,
      }),
      Animated.timing(this.state.fadeIn, {
        toValue: opacityTo,
        duration: opacityDuration,
      }),
    ]).start()
  }

  render() {
    const {
      inputRange,
      outputRange,
      ...rest,
    } = this.props

    return (
      <Animated.View style={{
        opacity: this.state.fadeIn,
        transform: [{
          translateY: this.state.yAxis.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
          }),
        }],
      }}>
        <Wrapped {...rest} />
      </Animated.View>
    )
  }
}

export default FadeInUpOnMount
