import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useCallback } from 'react';
import screenNames from '@src/modules/navigation/screen-names';
import { useNavigation } from '@react-navigation/native';
import { styles } from '@src/modules/home/ui/components/header/styles';

export default function HomeHeader() {
  const navigation = useNavigation();

  const onSettingsPressed = useCallback(() => {
    navigation.navigate(screenNames.Settings as never);
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="folder" size={30} color="white" onPress={() => {}} />
      <Text style={styles.title}>Deadmanswitch</Text>
      <Icon name="gear" size={30} color="white" onPress={onSettingsPressed} />
    </View>
  );
}
