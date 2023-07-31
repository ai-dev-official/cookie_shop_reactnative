import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, StyleSheet, Easing, StatusBar} from 'react-native';

const BouncingBallAnimation = ({navigation}) => {
  const [ballColorIndex, setBallColorIndex] = useState(0);
  const texts = ['AI', 'Dev', 'Official', ':)'];
  const colors = ['#2358e6cc', '#e58d2ccc', '#1bc03ccc', '#df4b20cc'];

  const translateYAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const wordSpacingAnim = useRef(new Animated.Value(0)).current;

  const ballColors = colors.slice(0, texts.length);
  const ballPosition = useState(new Animated.Value(0))[0];
  const textAnimationOpacity = useState(new Animated.Value(0))[0];

  const startAnimation = () => {
    ballPosition.setValue(0);
    ballColorIndex.current = (ballColorIndex.current + 1) % ballColors.length;

    Animated.timing(ballPosition, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(wordSpacingAnim, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(wordSpacingAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();
  }, [translateYAnim, scaleAnim, wordSpacingAnim]);

  useEffect(() => {
    startAnimation();
    Animated.timing(textAnimationOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [ballColorIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBallColorIndex(prevIndex => (prevIndex + 1) % ballColors.length);
    }, 700);

    return () => clearInterval(intervalId);
  }, []);

  const ballStyle = {
    transform: [
      {
        translateY: ballPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [-30, -200],
        }),
      },
    ],
    backgroundColor: ballColors[ballColorIndex],
  };

  const textStyle = {
    opacity: textAnimationOpacity,
    fontFamily: 'Oufit-Regular',
  };

  const textContainerStyle = {
    position: 'absolute',
    bottom: '50%',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    color: colors.light,
    fontFamily: 'Oufit-Regular',
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#131c28'barStyle={colors.light} />
      <Animated.View style={[styles.ball, ballStyle]}>
        <View style={styles.ballTop} />
      </Animated.View>

      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateY: translateYAnim}, {scale: scaleAnim}],
        }}>
        <Animated.Text
          style={[textStyle, {
            marginHorizontal: wordSpacingAnim,
            fontSize: 32,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Oufit-Regular',
          }]}>
          {texts[ballColorIndex % texts.length]}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28292d',
  },
  ball: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor: 'yellow',
  },
  ballTop: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'transparent',
  },
  phrase: {
    textAlign: 'center',
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'Oufit-Regular',
  },
});

export default BouncingBallAnimation;
