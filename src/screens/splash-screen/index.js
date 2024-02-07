import React from 'react';
import {LinearGradientContainer, PatternDesign} from '../../components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import style from './style';

export const SplashScreen = () => {
  const offset = useSharedValue(500);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 5000}),
      -1,
      false,
    );
  }, []);

  return (
    <LinearGradientContainer>
      <Animated.View style={[style.container, animatedStyles]}>
        <PatternDesign />
      </Animated.View>
    </LinearGradientContainer>
  );
};
