import React, {
  Animated,
  Component,
  PropTypes,
} from 'react-native'

const FadeInOnMount = (Wrapped, animConfig) => class extends Component {
  static defaultProps = animConfig || {}
  static propTypes = {
    opacityTo: PropTypes.number.isRequired,
    opacityDuration: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const {
      opacityTo,
      opacityDuration,
    } = this.props

    Animated.timing(this.state.fadeIn, {
      toValue: opacityTo,
      duration: opacityDuration,
    }).start()
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Animated.View style={{opacity: this.state.fadeIn}}>
        <Wrapped {...rest} />
      </Animated.View>
    )
  }
}

export default FadeInOnMount
