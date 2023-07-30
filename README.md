This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.












// import React, {useRef, useEffect, useState} from 'react';
// import {View, Text, Animated, StyleSheet} from 'react-native';

// const BouncingBallAnimation = () => {
//   const ballPosition = useRef(new Animated.Value(0)).current;
//   const [ballColorIndex, setBallColorIndex] = useState(0);
//   const texts = ['AI', 'Dev', 'Official', ':)'];
//   const colors = ['#2358e6', '#e58d2c', '#27c05f', '#df4b20']; 

//   const ballColors = colors.slice(0, texts.length);
//   const textAnimationOpacity = useState(new Animated.Value(0))[0];

//   const startAnimation = () => {
//     ballPosition.setValue(0);
//     ballColorIndex.current = (ballColorIndex.current + 1) % ballColors.length;

//     Animated.timing(ballPosition, {
//       toValue: 1,
//       duration: 650,
//       useNativeDriver: false,
//     }).start(onBounceComplete);
//   };

//   const onBounceComplete = () => {
//     startAnimation();
//   };

 

//   useEffect(() => {
//     startAnimation();
//   }, []);

//     const textStyle = {
//     opacity: textAnimationOpacity,
//   };

//     useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBallColorIndex((prevIndex) => (prevIndex + 1) % ballColors.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.ball,
//           {
//             backgroundColor: ballColors[ballColorIndex.current],
//             transform: [
//               {
//                 translateY: ballPosition.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, -300],
//                 }),
//               },
//             ],
//           },
//         ]}>
//         <View style={styles.ballTop} />
//       </Animated.View>
//       <Animated.Text style={[styles.phrase, textStyle]}>
//          {texts[ballColorIndex % texts.length]}
//       </Animated.Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#131c28',
//   },
//   ball: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     position: 'absolute',
//     bottom: '50%',
//     left: '45%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ballTop: {
//     position: 'absolute',
//     top: '-50%',
//     left: 0,
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//     backgroundColor: 'transparent',
//   },
//   phrase: {
//     fontSize: 20,
//     textAlign: 'center',
//     position: 'absolute',
//     bottom: '50%',
//     left: 0,
//     right: 0,
//     opacity: 0,
//     color: 'white',
//   },
// });

// export default BouncingBallAnimation;


() => {
      setTimeout(() => {
        navigation.navigate('LoginScreen'); 
      }, 5000);
    }
