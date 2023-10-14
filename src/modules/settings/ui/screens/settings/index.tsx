import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@src/modules/settings/ui/screens/settings/styles';
import { menuItems } from '@src/modules/settings/ui/screens/settings/constants';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();

  const onMenuPressed = useCallback((screenName: never) => {
    navigation.navigate(screenName);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View>
        <Text style={styles.label}>CLIENT</Text>
        <View style={styles.listContainer}>
          {menuItems.map(menu => (
            <TouchableOpacity
              key={menu.id}
              style={styles.itemContainer}
              onPress={() => onMenuPressed(menu.title as never)}>
              <Text style={styles.menuLabel}>{menu.title}</Text>
              {menu.id !== 0 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
