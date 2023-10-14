import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import screenNames from '@src/modules/navigation/screen-names';
import Button from '@src/modules/ud-ui/components/button';

export const SignUp = () => {
  const navigation = useNavigation();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isIconPressed, setIsIconPressed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(emailOrPhone && password));
  }, [emailOrPhone, password]);

  const onLoginPressed = useCallback(() => {
    navigation.navigate(screenNames.Home as never);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email or phone number:</Text>
          <View
            style={[
              styles.inputWrapper,
              isIconPressed && styles.inputWrapperFocused,
            ]}>
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={isIconPressed ? '#3498db' : '#333'}
            />
            <TextInput
              style={styles.input}
              value={emailOrPhone}
              onChangeText={text => setEmailOrPhone(text)}
              placeholder="Enter your email or phone number"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <View
            style={[
              styles.inputWrapper,
              isIconPressed && styles.inputWrapperFocused,
            ]}>
            <FontAwesome
              name="lock"
              size={20}
              color={isIconPressed ? '#3498db' : '#333'}
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.passwordWarning}>
            <FontAwesome
              name="warning"
              size={18}
              color={isIconPressed ? '#3498db' : '#333'}
            />
            <Text style={styles.warningText}>
              Password should be complicated
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={onLoginPressed}
            title="Login"
            buttonStyle={styles.blueButton}
            textStyle={styles.whiteButtonText}
            disabled={isButtonDisabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
