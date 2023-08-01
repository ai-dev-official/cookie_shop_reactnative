import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/MaterialIcons';
import CookieIcon from 'react-native-vector-icons/FontAwesome6';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../Modules/context';

import Users from '../../model/users';

const SignInScreen = ({navigation}) => {
  const theme = useTheme();
  const {colors} = useTheme();

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
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
      fontFamily: 'Outfit-Thin',
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
      borderWidth: 1,
      borderColor: colors.light,
      backgroundColor: colors.primary,
    },
    register: {
      color: colors.light,
      fontFamily: 'Outfit-Medium',
    },
    register2: {
      color: colors.primary,
      fontFamily: 'Outfit-Medium',
    },
    cookie: {
      marginTop: 70,
      color: colors.light,
    },
    bottomText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
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
      fontFamily: 'Outfit-Medium',
    },
    register2: {
      color: colors.primary,
      fontFamily: 'Outfit-Medium',
    },
    cookie: {
      marginTop: 70,
      color: colors.light,
    },
    bottomText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },

    errorMsg: {
      color: colors.primary,
      fontSize: 14,
      marginLeft: 10,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <View style={styles.signupcontainer}>
        <CookieIcon name="cookie-bite" size={72} style={styles.cookie} />

        <View style={styles.header}>
          <Text style={styles.text_header}>Sign In</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <View style={styles.action}>
            <User name="verified-user" color={colors.primary} size={20} />
            <TextInput
              placeholder="Username"
              placeholderTextColor={colors.placeholder}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.primary} size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor={colors.placeholder}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
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
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={[styles.signIn, styles.signupButton]}
              onPress={() => {
                loginHandle(data.username, data.password);
              }}>
              <View style={styles.signIn}>
                <Text style={styles.textSign}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.register}>Not registered yet? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.register2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SignInScreen;
