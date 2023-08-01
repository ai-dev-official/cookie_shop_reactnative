import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import CookieIcon from 'react-native-vector-icons/FontAwesome6';

const SignInScreen = ({navigation}) => {
  const theme = useTheme();
  const {colors} = useTheme();
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const styles = StyleSheet.create({
    signupcontainer: {
      width: 400,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignSelf: 'center',
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 50,
    },
    footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: colors.background,
      width: 300,
    },
    text_header: {
      color: colors.light,
      fontSize: 48,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Thin'
    },
    text_footer: {
      color: colors.primary,
      fontSize: 18,
    },
    action: {
      flexDirection: 'row',
      marginTop: 20,
      borderWidth: 1,
      borderColor: colors.light,
      paddingHorizontal: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      // marginTop: Platform.OS === 'ios' ? 0 : -12,
      marginTop: Platform.OS === 'ios' ? 0 : 0,
      paddingLeft: 10,
      color: colors.light,
      alignSelf: 'center',
    },
    button: {
      alignItems: 'center',
      marginVertical: 20,
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      color: colors.light,
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.light,
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20,
    },
    color_textPrivate: {
      color: 'grey',
    },
    signupButton: {
      backgroundColor: colors.primary,
      elevation: 1,
      shadowColor: colors.light,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.16,
      shadowRadius: 1,
    },
    register: {
      color: colors.light,
      fontFamily: 'Outfit-Medium'
    },
    register2: {
        color: colors.primary,
        fontFamily: 'Outfit-Medium'
      },
    cookie:{
        marginTop: 70,
        color:colors.light,
    },
    bottomText:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    errorMsg: {
      color: colors.primary,
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View style={styles.signupcontainer}>
        <CookieIcon name="cookie-bite" size={72} style={styles.cookie} />

        <View style={styles.header}>
          <Text style={styles.text_header}>sign up</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.action}>
            <User name="verified-user" color={colors.primary} size={20} />
            <TextInput
              placeholder="Username"
              placeholderTextColor={colors.placeholder}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
            <Feather name="lock" color={colors.primary} size={20} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.placeholder}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.primary} size={20} />
              ) : (
                <Feather name="eye" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <Feather name="lock" color={colors.primary} size={20} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={colors.placeholder}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.primary} size={20} />
              ) : (
                <Feather name="eye" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={[styles.signIn, styles.signupButton]}
              onPress={() => {}}>
              <View style={styles.signIn}>
                <Text style={styles.textSign}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.bottomText}>
                <Text style={styles.register}>Already a registered? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.register2}>Sign In</Text>
                </TouchableOpacity>
                </View>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SignInScreen;
