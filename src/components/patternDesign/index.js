import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  runOnJS,
  runOnUI,
} from 'react-native-reanimated';
import {images} from '../../assets';
const SIZE = 100;
const GLOW_INITIAL_SCALE = 2; //Scale of the glow
const GLOW_MINIMUM_SCALE = 1.2;
const GLOW_DURATION = 5000;

export const PatternDesign = () => {
  const useGlowAnimation = () => {
    return useAnimatedStyle(() => ({
      transform: [
        {
          scale: withRepeat(
            withSequence(
              // Go to minimal value on half scaling duration
              withTiming(GLOW_MINIMUM_SCALE, {duration: GLOW_DURATION / 2}),
              //and go to initial value during other half
              withTiming(GLOW_INITIAL_SCALE, {duration: GLOW_DURATION / 2}),
            ),
            // Loop the animation
            -1,
            // Loop in both direction (small=> big, big => small)
            true,
          ),
        },
      ],
    }));
  };

  const glowAnimation = useGlowAnimation();

  return (
    <View style={style.container}>
      <Animated.View style={[style.glowContainer2, glowAnimation]}>
        <Image source={images.glow1} style={style.imageGlow} />
      </Animated.View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={images.donutchart2} style={style.image} />
      </View>
    </View>
  );
};
