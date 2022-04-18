import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../../../assets/Waldner-cup-002.png';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';

const Loginscreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {height, width} = useWindowDimensions();

  const onLoginPressed = () => {
    navigation.navigate('HomeForCoach');
  };
  const onForgotPressed = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <ScrollView>
      <View style={[styles.root, {height: height * 1}]}>
        <View style={styles.imgContainer}>
          <Image
            source={BackgroundImage}
            style={[
              styles.backgroundImg,
              {height: height * 0.5, width: width * 1},
            ]}
          />
        </View>
        <CustomTextInput
          placeholder="username | email | phone number"
          value={username}
          setValue={text => setUsername(text)}
        />
        <Text style={{color: 'red'}}>{username.map(word => {})}</Text>

        <CustomTextInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <View style={styles.loginButton}>
          <Button
            label="Forgot Password?"
            type="TERTIARY"
            onPress={onForgotPressed}
          />
          <View style={styles.loginButton}>
            <Button label="Login" onPress={onLoginPressed} />
          </View>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('Signup1');
              // console.warn('Sign up ');
            }}>
            <Text style={styles.txtSignup}>
              I am a new user. <Text style={styles.signUp}>SIGN UP</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    padding: 10,
    // height: '100%',
  },
  backgroundImg: {
    maxWidth: 400,
    maxHeight: 300,
    opacity: 50,
  },
  loginButton: {
    marginVertical: 16,
  },
  txtSignup: {
    color: '#C2C9D1',
    alignItems: 'center',
    fontSize: 16,
  },
  box: {
    alignItems: 'center',
    marginVertical: 20,
  },
  signUp: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Loginscreen;
