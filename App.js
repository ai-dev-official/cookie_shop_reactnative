import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import BouncingBallAnimation from './components/Screens/LandingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import Tabs from './navigation/tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './components/Modules/context';
import RootStackScreen from './navigation/RootStackScreen';


const Stack = createStackNavigator();

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});


const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: '#e38035',
    secondary: '#343740',
    light: '#ffffff',
    tertiary: '#141519',
    primaryAlt: '#000000',
    buttonColor: '#010101',
    iconcontainer: '#34373e',
    background: '#28292d',
    label: '#565a62',
    dark: '#000000',
    transparent: '#00000000',
    lightGray: '#D3D3D3'
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: '#e38035',
    secondary: '#343740',
    light: '#ffffff',
    tertiary: '#141519',
    primaryAlt: '#000000',
    buttonColor: '#010101',
    iconcontainer: '#34373e',
    background: '#28292d',
    label: '#565a62',
    dark: '#000000',
    transparent: '#00000000',
    lightGray: '#D3D3D3',
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const theme = isThemeDark ? CombinedDefaultTheme : CombinedDarkTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsThemeDark(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <BouncingBallAnimation />;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {loginState.userToken !== null ? (
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{tabBarVisible: false, headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name="RootStack"
                component={RootStackScreen}
                options={{tabBarVisible: false, headerShown: false}}
                initialParams={{ loginState }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
