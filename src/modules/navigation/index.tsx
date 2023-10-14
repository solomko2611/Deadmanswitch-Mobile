import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import screenNames from './screen-names';
import { SignUp } from '@src/modules/auth/ui/screens/sign-up';
import { AuthScreen } from '@src/modules/auth/ui/screens/initial';
import HomeScreen from '@src/modules/home/ui/screens';
import IdentityScreen from '@src/modules/settings/ui/screens/identity';
import SecurityScreen from '@src/modules/settings/ui/screens/security';
import SettingsScreen from '@src/modules/settings/ui/screens/settings';

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };
const settingsOptions = {
  headerStyle: {
    backgroundColor: '#F3F3F3',
  },
  headerBackTitleVisible: false,
};

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.Auth}
          component={AuthScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.Home}
          component={HomeScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.SignUp}
          component={SignUp}
          options={defaultOptions}
        />
        <Stack.Screen
          name={screenNames.Settings}
          component={SettingsScreen}
          options={settingsOptions}
        />
        <Stack.Screen
          name={screenNames.Identity}
          component={IdentityScreen}
          options={settingsOptions}
        />
        <Stack.Screen
          name={screenNames.Security}
          component={SecurityScreen}
          options={settingsOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
