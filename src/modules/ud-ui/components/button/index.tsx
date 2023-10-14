import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//todo add types
type Props = {
  onPress: () => void;
  title: string;
  buttonStyle: any;
  textStyle: any;
  disabled: boolean;
};

const Button = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, buttonStyle]}
    disabled={disabled}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Button;
