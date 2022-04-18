import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import Login from '../../screens/LoginScreen/LoginScreen';
import ForgetPassword from '../../screens/ForgotPassword/RecoveryEmail';
import OTPVerification from '../../screens/ForgotPassword/OTPVerification';
import ChangePassword from '../../screens/ForgotPassword/ChangePassword';
import Signup1 from '../../screens/SignupScreen/SignupScreen-1';
import Signup2 from '../../screens/SignupScreen/SignupScreen-2';
import Signup3 from '../../screens/SignupScreen/SignupScreen-3';
import HomePlayer from '../../screens/HomeScreens/Player/HomeForPlayer';
import HomeForCoach from '../../screens/HomeScreens/Coach/HomeForCoach';
import LanguageScreen from '../../screens/LanguageSelect/LanguageSelectScreen';
import UserMenu from '../../screens/UserMenu/UserMenu';
import UserProfile from '../../screens/UserProfile/UserProfile';
import TrainingVideos from '../../screens/TrainingVideos/TrainingVideos';
import PracticeVideos from '../../screens/PracticeVideos/PracticeVideos';
import UploadVideo from '../../screens/UploadVideo/UploadVideo';
import LiveStream from '../../screens/LiveStream/LiveStream';
import MatchStatistics from '../../screens/MatchStatistics/MatchStatistics';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LanguageScreen"
        screenOptions={{header: () => null}}>
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Signup1" component={Signup1} />
        <Stack.Screen name="Signup2" component={Signup2} />
        <Stack.Screen name="Signup3" component={Signup3} />
        <Stack.Screen name="HomePlayer" component={HomePlayer} />
        <Stack.Screen name="HomeForCoach" component={HomeForCoach} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="TrainingVideos" component={TrainingVideos} />
        <Stack.Screen name="PracticeVideos" component={PracticeVideos} />
        <Stack.Screen name="UploadVideo" component={UploadVideo} />
        <Stack.Screen name="LiveStream" component={LiveStream} />
        <Stack.Screen name="MatchStatistics" component={MatchStatistics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
