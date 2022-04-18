import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Navigation from './src/components/Navigation/Navigation';

// import WelcomeScreen from './src/screens/WelcomeScreen';
// import LanguageSelector from './src/screens/LanguageSelect/LanguageSelectScreen';
// import Login from './src/screens/LoginScreen/LoginScreen';
// import SignUpScreen from './src/screens/SignupScreen/SignupScreen-2';
// import SignUpScreen from './src/screens/SignupScreen/SignupScreen-3';
// import RecoveryEmail from './src/screens/ForgotPassword/RecoveryEmail';
// import HomeForPlayer from './src/screens/HomeScreens/Player/HomeForPlayer';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1e1e1e" />

      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '1E1E1E',
  },
});

export default LotsOfStyles;
