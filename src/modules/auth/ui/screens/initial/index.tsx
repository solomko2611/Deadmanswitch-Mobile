import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '@src/modules/ud-ui/components/button';
import screenNames from '@src/modules/navigation/screen-names';

export const AuthScreen = () => {
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    navigation.navigate(screenNames.SignUp as never);
  };
  const onSignInPressed = () => {
    navigation.navigate(screenNames.Home as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.centeredText}>Deadmanswitch</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onSignInPressed}
          title="Login"
          buttonStyle={styles.blueButton}
          textStyle={styles.whiteButtonText}
          disabled={false}
        />
        <Button
          onPress={onSignUpPressed}
          title="Sign Up"
          buttonStyle={styles.whiteButton}
          textStyle={styles.blueButtonText}
          disabled={false}
        />
      </View>
    </View>
  );
};
