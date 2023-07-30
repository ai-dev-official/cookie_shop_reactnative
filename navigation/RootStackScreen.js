import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BouncingBallAnimation from '../components/Screens/LandingScreen';
import SignInScreen from '../components/Screens/SignInScreen';
import SignUpScreen from '../components/Screens/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const { loginState } = route.params; 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(loginState.userToken !== null ? 'Tabs' : 'SignInScreen');
    }, 5000); 
  }, [navigation, loginState]);

  return (
    <RootStack.Navigator headerShown={false}>
      {loading ? (
        <RootStack.Screen
          name="SplashScreen"
          component={BouncingBallAnimation}
          options={{ tabBarVisible: false, headerShown: false }}
        />
      ) : (
        <>
          <RootStack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <RootStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
