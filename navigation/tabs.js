import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {COLORS, icons} from '../constants';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Heart from 'react-native-vector-icons/AntDesign';
// import ChefSvg from '../constants/ChefSvg';
import Bag from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import MapPin from 'react-native-vector-icons/Feather';
import Menu from 'react-native-vector-icons/Feather';
// import StripePayment from '../screens/StripePayment';
import HomeScreen from '../components/Screens/HomeScreen';
import SearchScreen from '../components/Screens/SearchScreen';
import PremiumScreen from '../components/Screens/PremiumScreen';
import Crown from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={[
      styles.shadow,
      {
        top: -35,
        justifyContent: 'center',
        alignItems: 'center',
      },
    ]}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ff0077',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  const theme = useTheme();
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },

    viewContainer: {
      top: -30,
      width: 60,
      height: 60,
      borderRadius: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconContainer: {
      borderRadius: 25,
      alignSelf: 'center',
      backgroundColor: colors.iconcontainer,
    },

    iconContainer2: {
      width: 28,
      height: 28,
    },

    dot: {
      alignSelf: 'flex-end',
      marginTop: -30,
      marginRight: 10,
    },

    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    headerLeftIcon: {
      marginRight: 10,
      color: colors.primary,
    },

    menu: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.lightGrayShades,
      width: 40,
      height: 40,
      borderRadius: 5,
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showLabel: true,
        activeTintColor: colors.primary,
        tabBarStyle: {
          position: 'absolute',
          bottom: -10,
          left: 0,
          right: 0,
          elevation: 0,
          color: colors.label,
          backgroundColor: colors.tertiary,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 70,
          ...styles.shadow,
        },

        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: colors.primary,
        },

        headerTitle: null,
        headerLeft: null,
        headerRight: null,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Outfit-Regular',
            top: -18,
            left: 35,
          },
          activeTintColor: colors.primary,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {backgroundColor: colors.iconcontainer, marginRight: -70},
              ]}>
              <TouchableOpacity>
                <Feather
                  size={28}
                  name="home"
                  style={[styles.iconContainer, {color: colors.light}]}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          headerLeft: null,
          headerRight: null,
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Outfit-Regular',
            top: -18,
          },
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {backgroundColor: colors.iconcontainer},
              ]}>
              <TouchableOpacity>
                <Feather
                  name="search"
                  size={28}
                  style={[styles.iconContainer, {color: colors.light}]}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{
          headerShown: false,
          headerLeft: null,
          headerRight: null,
          tabBarLabel: 'Premium',
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Outfit-Regular',
            top: -18,
            right: 35,
          },
          activeTintColor: colors.primary,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {backgroundColor: colors.iconcontainer, marginLeft: -70},
              ]}>
              <TouchableOpacity>
                <Crown
                  name="crown-outline"
                  size={32}
                  style={[styles.iconContainer, {color: colors.light}]}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
