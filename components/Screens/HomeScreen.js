import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncingBallAnimation from './LandingScreen';
import {useTheme} from 'react-native-paper';
import User from '../../assets/images/user.jpg';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Cookie1 from '../../assets/images/cookie1.webp';
import Cookie2 from '../../assets/images/cookie2.webp';
import Cookie3 from '../../assets/images/cookie3.webp';
import Arrow from 'react-native-vector-icons/FontAwesome6'
import Crown from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const theme = useTheme();
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

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
      backgroundColor: colors.background,
      fontFamily: 'Outfit-Regular',
      paddingHorizontal: 30,
    },

    headerView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },

    headerRight: {
      display: 'flex',
      flexDirection: 'row',
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
    headerUnder: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    underText1: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 48,
      marginBottom: -10,
    },
    underText2: {
      color: colors.primary,
      fontFamily: 'Outfit-Regular',
      fontSize: 36,
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

    productView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 200,
      height: 280,
      marginBottom: 20,
    },

    productLeft:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 40,
    },

    productRight:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    cookie1: {
      width: 130,
      height: 130,
      bottom: -30,
      zIndex: 1,
    },

    productDesc:{
      width: 155,
      height: 170,
      backgroundColor: colors.secondary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 80,
      padding: 20,
      paddingTop: 40,
    },
    descText1:{
      fontSize: 20,
      color: colors.light,
      fontFamily: 'Outfit-Regular',
    },
    descText2:{
      fontSize: 20,
      lineHeight: 20,
      color: colors.light,
      fontFamily: 'Outfit-Regular',
    },
    descView:{
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
    premium:{
      fontSize: 12,
      color: colors.primary,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Regular',
    },
    price:{
      color:colors.light,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Bold',
      fontSize: 18,
      lineHeight:18,
    },
    priceCancel:{
      color:colors.light,
      textTransform: 'uppercase',
      textDecorationLine: 'line-through',
    },
    descpricearrow:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    arrowButton:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.dark,
      right: -22,
    },

    offersArrowButton:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.dark,
      right: -22,
      bottom: -40,
    },

    arrowIcon:{
      color: colors.light,
      alignSelf: 'center',
    },

    offersView:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },

    cookie3: {
      width: 90,
      height: 90,
      zIndex: 1,
    },

    offersDesc:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 350,
      height: 130,
      backgroundColor: colors.secondary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 80,
      padding: 20,
    },

    descText:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    offersdescpricearrow:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },

   prices:{
      alignSelf: 'flex-end',
      marginBottom: -10,
   }

  });

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle='dark-content'
      />
      <View style={styles.headerView}>
        <View style={styles.headerRight}>
          <Image source={User} style={styles.userImage} />
          <View>
            <Text style={styles.headerText1}>James</Text>
            <Text style={styles.headerText2}>Figueroa</Text>
          </View>
        </View>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.bagView}>
            <Feather name="shopping-bag" size={20} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.count}>6</Text>
          <Text style={styles.bagText}>Products</Text>
        </View>
      </View>
      <View style={styles.headerUnder}>
        <View style={styles.underRight}>
          <Text style={styles.underText1}>Cookies</Text>
          <Text style={styles.underText2}>Premium</Text>
        </View>
        <View style={styles.underLeft}>
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </View>
      <View style={styles.productView}>
        <View style={styles.productLeft}>
          <Image source={Cookie1} style={styles.cookie1} />
          <View style={styles.productDesc}>
            <Text style={styles.descText1}>Chocolate</Text>
            <Text style={styles.descText2}>chips</Text>
            <View style={styles.descView}>
              <Crown
                  name="crown-outline"
                  size={18}
                  style={styles.crownIcon}
                />
              <Text style={styles.premium}>Premium</Text>
            </View>
            <View style={styles.descpricearrow}>
              <Text style={styles.price}>20 USD</Text>
              <View style={styles.arrowButton}>
                <Arrow
                  name="arrow-right-long"
                  size={14}
                  style={styles.arrowIcon}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productRight}>
          <Image source={Cookie3} style={styles.cookie1} />
          <View style={styles.productDesc}>
            <Text style={styles.descText1}>Oatmeal</Text>
            <Text style={styles.descText2}>with raisins</Text>
            <View style={styles.descView}>
              <Crown
                  name="crown-outline"
                  size={18}
                  style={styles.crownIcon}
                />
              <Text style={styles.premium}>Premium</Text>
            </View>
            <View style={styles.descpricearrow}>
              <Text style={styles.price}>16 USD</Text>
              <View style={styles.arrowButton}>
                <Arrow
                  name="arrow-right-long"
                  size={14}
                  style={styles.arrowIcon}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerUnder}>
        <View style={styles.underRight}>
          <Text style={styles.underText1}>Offers</Text>
        </View>
        <View style={styles.underLeft}>
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </View>
      <View style={styles.offersView}>
        <View style={styles.offersDesc}>
            <Image source={Cookie2} style={styles.cookie3} />
            <View style={styles.descText}>
              <Text style={styles.descText1}>Chocolate</Text>
                <Text style={styles.descText2}>chips</Text>
                <View style={styles.descView}>
                  <Crown
                      name="crown-outline"
                      size={18}
                      style={styles.crownIcon}
                    />
                  <Text style={styles.premium}>Premium</Text>
                </View>
            </View>
              <View style={styles.offersdescpricearrow}>
               <View style={styles.prices}>
                  <Text style={styles.priceCancel}>20 USD</Text>
                  <Text style={styles.price}>12 USD</Text>
               </View>
                <View style={styles.offersArrowButton}>
                  <Arrow
                    name="arrow-right-long"
                    size={14}
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
