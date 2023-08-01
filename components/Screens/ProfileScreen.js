import React, {useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  TouchableOpacity,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Heart from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import CreditCard from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../Modules/context';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import CustomerIcon from 'react-native-vector-icons/AntDesign';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Bag from 'react-native-vector-icons/Feather';
import files from '../../assets/filesBase64';
import Arrow from 'react-native-vector-icons/FontAwesome6';

const ProfileScreen = ({navigation, props}) => {
  const theme = useTheme();
  const {colors} = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginVertical: 10,
      backgroundColor: colors.background,
      marginHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginVertical: 10,
      backgroundColor: colors.background,
      marginHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    profileImg: {
      backgroundColor: colors.background,
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      fontFamily: 'Outfit-Regular',
      color: colors.primary,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
      marginBottom: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    profileImg: {
      backgroundColor: colors.background,
    },
    banner: {
      width: 500,
      height: 300,
    },
    image: {
      flexDirection: 'row',
      marginTop: 15,
      elevation: 1,
      shadowColor: colors.light,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.16,
      shadowRadius: 1,
    },
  });

  return (
    <SafeAreaView style={{flex: 1, paddingTop: (StatusBar.currentHeight) }}>
      <ScrollView style={{marginBottom: 50}}>
        <View style={{flex: 1}}>
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                <View style={styles.image}>
                  <Avatar.Image
                    source={require('../../assets/images/user.jpg')}
                    resizeMode="contain"
                    size={50}
                    style={styles.profileImg}
                  />
                  <View style={{marginLeft: 15, flexDirection: 'column'}}>
                    <Title style={styles.title}>James Figueroa</Title>
                    <Caption style={styles.caption}>@jamesfigueroa</Caption>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.section}>
                    <Paragraph style={[styles.paragraph, styles.caption]}>
                      487
                    </Paragraph>
                    <Caption style={styles.caption}>Orders</Caption>
                  </View>
                  <View style={styles.section}>
                    <Paragraph style={[styles.paragraph, styles.caption]}>
                      286
                    </Paragraph>
                    <Caption style={styles.caption}>Bonus Points</Caption>
                  </View>
                </View>
              </View>

              <View
                style={{
                  height: 250,
                  marginVertical: 10,
                  backgroundColor: colors.background,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/images/banner.jpg')}
                  resizeMode="cover"
                  style={styles.banner}
                />
              </View>

              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({color, size}) => (
                    <HomeIcon name="home" color={colors.primary} size={size} />
                  )}
                  label="Home"
                  onPress={() => {
                    navigation.navigate('HomeScreen');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Heart name="hearto" color={colors.primary} size={size} />
                  )}
                  label="My Favorites"
                  onPress={() => {
                    navigation.navigate('PremiumScreen');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Bag
                      name="shopping-bag"
                      color={colors.primary}
                      size={size}
                    />
                  )}
                  label="Orders"
                  onPress={() => {
                    navigation.navigate('HomeScreen');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Feather name="search" color={colors.primary} size={size} />
                  )}
                  label="Search"
                  onPress={() => {
                    navigation.navigate('SearchScreen');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <CustomerIcon
                      name="customerservice"
                      color={colors.primary}
                      size={size}
                    />
                  )}
                  label="Order Help"
                  onPress={() => {
                    navigation.navigate('PremiumScreen');
                  }}
                />

                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="email" color={colors.primary} size={size} />
                  )}
                  label="Contact Preferences"
                  onPress={() => {
                    navigation.navigate('PremiumScreen');
                  }}
                />
              </Drawer.Section>

              <Drawer.Section title="">
                <TouchableRipple
                  onPress={() => {
                    toggleTheme();
                  }}>
                  <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                      <Switch value={theme.dark} />
                    </View>
                  </View>
                </TouchableRipple>
              </Drawer.Section>
            </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <LogoutIcon name="logout" color={colors.primary} size={size} />
              )}
              label="Sign Out"
              onPress={() => {
                signOut();
              }}
            />
          </Drawer.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
