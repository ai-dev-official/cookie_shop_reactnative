import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncingBallAnimation from './LandingScreen';
import {useTheme} from 'react-native-paper';
import {bgtheme} from '../../assets/bgtheme';
import SearchIcon from 'react-native-vector-icons/Feather';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CookieIcon from 'react-native-vector-icons/FontAwesome6';
import Cookie from 'react-native-vector-icons/FontAwesome6';
import Cookie1 from 'react-native-vector-icons/MaterialIcons';
import Arrow from 'react-native-vector-icons/FontAwesome6';

const SearchScreen = ({navigation}) => {
  const theme = useTheme();
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  // if (isLoading) {
  //   return <BouncingBallAnimation />;
  // }

  const handleLocation = loc => {
    console.log('location; ', loc);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    wrapper: {
      flex: 1,
      marginHorizontal: 20,
    },
    search: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: showSearch ? bgtheme.bgWhite(0.2) : colors.transparent,
      margin: 5,
      padding: 5,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      color: colors.light,
      paddingLeft: 6,
    },
    searchButton: {
      backgroundColor: bgtheme.bgWhite(0.3),
      borderRadius: 9999,
      padding: 10,
      margin: 1,
    },
    listItems: {
      position: 'absolute',
      width: '100%',
      backgroundColor: colors.lightGray,
      top: 70,
      borderRadius: 20,
      zIndex: 1,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 5,
    },
    locText: {
      fontFamily: 'Outfit-Regular',
      fontSize: 20,
    },
    border: {
      borderBottomColor: colors.background,
      borderBottomWidth: 0.3,
    },
    apiwrapper: {
      flex: 1,
    },
    textBold: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textRegular: {
      color: colors.lightGray,
      fontSize: 16,
      fontWeight: '600',
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    cookieImage: {
      width: 250,
      height: 250,
      marginLeft: 20,
    },
    price: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
    },
    priceAmount: {
      fontSize: 48,
      color: colors.white,
      marginLeft: 5,
      fontFamily: 'Outfit-Bold',
    },
    priceSym: {
      fontSize: 48,
      color: colors.white,
      // letterSpacing: 2,
      fontFamily: 'Outfit-Bold',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statText: {
      color: colors.white,
      fontSize: 16,
      marginLeft: 8,
      fontWeight: 'bold',
    },
    cookiesContainer: {
      marginBottom: 40,
      marginTop: 15,
    },
    cookiesHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 16,
      marginBottom: 8,
    },
    cookiesHeaderText: {
      fontSize: 18,
      color: colors.white,
      marginLeft: 8,
    },
    cookiesScrollView: {
      paddingLeft: 15,
    },
    cookiesItem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 105,
      height: 150,
      marginRight: 16,
      borderRadius: 20,
      backgroundColor: colors.iconcontainer,
      zIndex: -1,
      elevation: 1,
      shadowColor: colors.light,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.16,
      shadowRadius: 1,
    },
    cookiesDay: {
      fontSize: 16,
      color: colors.light,
      fontWeight: 'bold',
      marginTop: 8,
    },
    cookieTop: {
      width: 100,
      height: 80,
    },
    cookiesmallProduct: {},
    cookieLargeProduct: {},
    smallCookieImg: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    arrowButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.white,
      marginTop: -60,
      marginRight: 20,
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
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        blurRadius={40}
        source={require('../../assets/images/bgImage.jpg')}
        style={styles.backgroundImage}>
        <SafeAreaView
          style={{...styles.container, marginTop: StatusBar.currentHeight}}>
          <View style={styles.wrapper}>
            <View style={styles.search}>
              {showSearch ? (
                <TextInput
                  placeholder="Search Cookies"
                  placeholderTextColor={colors.lightGray}
                  style={styles.textInput}
                />
              ) : null}
              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                style={styles.searchButton}>
                {showSearch ? (
                  <CloseIcon
                    name="close"
                    size={25}
                    style={{color: colors.light}}
                  />
                ) : (
                  <SearchIcon
                    name="search"
                    size={25}
                    style={{color: colors.light}}
                  />
                )}
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View style={styles.listItems}>
                {locations.map((location, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder ? styles.border : '';

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.listItem,
                        borderClass ? styles.border : null,
                      ]}
                      onPress={() => handleLocation(location)}>
                      <CookieIcon
                        name="cookie-bite"
                        size={20}
                        style={{marginRight: 20}}
                      />
                      <Text style={styles.locText}>Chocolate, Chip Cookie</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <View style={styles.headerRight}>
                <TouchableOpacity
                  style={styles.arrowButton}
                  onPress={() => navigation.goBack()}>
                  <View>
                    <Arrow
                      name="arrow-left-long"
                      size={14}
                      style={styles.arrowIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {/* API Section */}
            <View style={styles.apiwrapper}>
              <Text style={styles.textBold}>
                Chocolate,
                <Text style={styles.textRegular}> Chip Cookie</Text>
              </Text>

              <View style={styles.imageContainer}>
                <View style={styles.cookiesmallProduct}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/cookie1.webp')}
                      style={styles.smallCookieImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/cookie3.webp')}
                      style={styles.smallCookieImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/cookie2.webp')}
                      style={styles.smallCookieImg}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.cookieLargeProduct}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/cookie1.webp')}
                      style={styles.cookieImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceSym}>€</Text>
                <Text style={styles.priceAmount}>28</Text>
              </View>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <CookieIcon
                    name="cookie-bite"
                    size={20}
                    style={{marginRight: 10}}
                  />
                  <Text style={styles.statText}>Chocolate</Text>
                </View>
                <View style={styles.statItem}>
                  <Cookie name="cookie" size={20} style={{marginRight: 10}} />
                  <Text style={styles.statText}>Resins</Text>
                </View>
                <View style={styles.statItem}>
                  <Cookie1 name="cookie" size={20} style={{marginRight: 10}} />
                  <Text style={styles.statText}>Fiber</Text>
                </View>
              </View>
              <View style={styles.cookiesContainer}>
                <View style={styles.cookiesHeader}>
                  <SearchIcon
                    name="search"
                    size={16}
                    style={{color: colors.light}}
                  />
                  <Text style={styles.cookiesHeaderText}>Related Cookies</Text>
                </View>
                <ScrollView
                  horizontal
                  contentContainerStyle={styles.cookiesScrollView}
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.cookiesItem}>
                    <View style={styles.cookieTop}>
                      <Image
                        source={require('../../assets/images/cookie1.webp')}
                        resizeMode="contain"
                        style={{width: 100, height: 80}}
                      />
                    </View>
                    <Text style={styles.cookiesDay}>Oatmeal</Text>
                    <Text style={{color: colors.light}}>€38</Text>
                  </View>
                  <View style={styles.cookiesItem}>
                    <View style={styles.cookieTop}>
                      <Image
                        source={require('../../assets/images/cookie3.webp')}
                        resizeMode="contain"
                        style={{width: 100, height: 80}}
                      />
                    </View>
                    <Text style={styles.cookiesDay}>Chocolate</Text>
                    <Text style={{color: colors.light}}>€22</Text>
                  </View>
                  <View style={styles.cookiesItem}>
                    <View style={styles.cookieTop}>
                      <Image
                        source={require('../../assets/images/cookie2.webp')}
                        resizeMode="contain"
                        style={{width: 100, height: 80}}
                      />
                    </View>
                    <Text style={styles.cookiesDay}>Peanut</Text>
                    <Text style={{color: colors.light}}>€48</Text>
                  </View>
                  <View style={styles.cookiesItem}>
                    <View style={styles.cookieTop}>
                      <Image
                        source={require('../../assets/images/cookie1.webp')}
                        resizeMode="contain"
                        style={{width: 100, height: 80}}
                      />
                    </View>
                    <Text style={styles.cookiesDay}>Snicker</Text>
                    <Text style={{color: colors.light}}>€28</Text>
                  </View>
                  <View style={styles.cookiesItem}>
                    <View style={styles.cookieTop}>
                      <Image
                        source={require('../../assets/images/cookie3.webp')}
                        resizeMode="contain"
                        style={{width: 100, height: 80}}
                      />
                    </View>
                    <Text style={styles.cookiesDay}>Macadamia</Text>
                    <Text style={{color: colors.light}}>€18</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;
