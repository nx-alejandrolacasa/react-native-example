import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';

type Props = {
  children: React.Node,
  style: StyleSheet,
};

type State = {
  fadeInAnim: typeof Animated,
};

class FadeIn extends React.Component<Props, State> {
  state = {
    fadeInAnim: new Animated.Value(0), // Initial value for opacity: 0
  };

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    Animated.timing(
      // Animate over time
      this.state.fadeInAnim,
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      },
    ).start();
  }

  render() {
    return (
      <Animated.View // Special animatable View
        style={[
          this.props.style,
          {
            opacity: this.state.fadeInAnim,
          },
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeIn;
