import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncingBallAnimation from './LandingScreen';
import Arrow from 'react-native-vector-icons/FontAwesome6';
import Crown from 'react-native-vector-icons/MaterialCommunityIcons';
import BookIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import BoxSvg from '../../assets/svg/BoxSvg';
import DotIcon from 'react-native-vector-icons/Octicons';
import CirclesModule from '../Modules/circles';


const PremiumScreen = () => {
  const theme = useTheme();
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <BouncingBallAnimation />;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 20,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },

    headerView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },

    headerRight: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -20,
    },

    headerText1: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 22,
    },
    headerText2: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 18,
    },

    userImage: {
      height: 50,
      width: 50,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: colors.light,
      marginRight: 20,
    },

    headerLeft: {
      backgroundColor: colors.light,
      height: 85,
      width: 80,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    bagView: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginTop: -39,
      backgroundColor: colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9,
    },

    headerIcon: {
      color: colors.light,
      alignSelf: 'center',
    },

    count: {
      color: colors.dark,
      fontSize: 24,
      fontWeight: '900',
    },

    bagText: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.dark,
      fontFamily: 'Outfit-Medium',
    },
    arrowButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.light,
      bottom: -5,
      marginRight: 20,
    },
    descView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: -5,
      marginTop: 5,
    },

    crownIcon: {
      fontSize: 18,
      color: colors.primary,
      marginRight: 5,
    },
    premium: {
      fontSize: 12,
      color: colors.primary,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Regular',
    },
    headerUnder: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    underText1: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 98,
      marginBottom: -10,
    },
    underText2: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 36,
      marginTop: -10,
      marginBottom: 10,
    },

    underLeft: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    seeMore: {
      color: colors.primary,
      fontFamily: 'Outfit-Regular',
      fontSize: 16,
    },
    buttonView: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    button: {
      width: 200,
      height: 70,
      borderRadius: 35,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.light,
    },
    buttonText: {
      color: colors.light,
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
    },
    bookIcon: {
      color: colors.light,
      marginRight: 20,
    },
    cookiesItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 110,
      height: 180,
      left: -130,
      bottom: -150,
      borderRadius: 20,
      backgroundColor: colors.light,
    },
    cookiesDay: {
      fontSize: 16,
      color: colors.dark,
      fontWeight: 'bold',
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
      lineHeight: 22,
    },
    cookieTop: {
      width: 60,
      height: 60,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.dark,
    },
    dotIcon: {
      color: colors.primary,
      marginVertical: 10,
    },

    bottomView: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 70,
      marginHorizontal: 20,
    },
    bottomViewWrapper:{
      width: 400,
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 200,
      borderWidth: 1,
      borderColor: colors.light,
      left: -180,
      bottom: -180,
    },
    bottomLeft: {
      width: 300,
      height: 300,
      borderRadius: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.iconcontainer,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../assets/images/bgImage.jpg')}
        style={styles.backgroundImage}>
        <SafeAreaView
          style={{...styles.container, marginTop: StatusBar.currentHeight}}>
          <View style={styles.wrapper}>
            <View style={styles.headerView}>
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.arrowButton}>
                  <View>
                    <Arrow
                      name="arrow-left-long"
                      size={14}
                      style={styles.arrowIcon}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.descView}>
                  <Crown
                    name="crown-outline"
                    size={18}
                    style={styles.crownIcon}
                  />
                  <Text style={styles.premium}>Premium</Text>
                </View>
              </View>
              <View style={styles.headerLeft}>
                <View style={styles.bagView}>
                  <TouchableOpacity>
                    <Feather
                      name="shopping-bag"
                      size={20}
                      style={styles.headerIcon}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.count}>6</Text>
                <Text style={styles.bagText}>Products</Text>
              </View>
            </View>
            <View style={styles.headerUnder}>
              <View style={styles.underRight}>
                <Text style={styles.underText1}>Cookies</Text>
                <Text style={styles.underText2}>Choco Chips</Text>
              </View>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button}>
                <BookIcon
                  name="book-outline"
                  size={32}
                  style={styles.bookIcon}
                />
                <Text style={styles.buttonText}>Information</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottomView}>
              <View style={styles.bottomViewWrapper}>
                <View style={styles.bottomLeft}>
                  <CirclesModule  />
                </View>
              </View>
              <View style={styles.cookiesItem}>
                <View style={styles.cookieTop}>
                  <BoxSvg
                    fill={colors.light}
                    width={32}
                    height={32}
                    viewBox="0 0 56 56"
                  />
                </View>
                <DotIcon name="dot-fill" size={20} style={styles.dotIcon} />
                <Text style={styles.cookiesDay}>Add to</Text>
                <Text style={styles.cookiesDay}>Order</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default PremiumScreen;
