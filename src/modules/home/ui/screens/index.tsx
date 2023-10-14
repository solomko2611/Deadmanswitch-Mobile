import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from '@gorhom/bottom-sheet';
import { styles } from '@src/modules/home/ui/screens/styles';
import HomeHeader from '@src/modules/home/ui/components/header';

export default function HomeScreen() {
  const mapRef = useRef<null | MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['20%'], []);

  const getCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(location => {
      const _region = {
        longitude: location.coords.longitude,
        longitudeDelta: 150,
        latitudeDelta: 150,
        latitude: location.coords.latitude,
      } as Region;

      setTimeout(() => {
        mapRef.current && mapRef.current.animateToRegion(_region, 2000);
      }, 500);
    });
  }, []);

  const onPowerPressed = useCallback(() => {
    getCurrentPosition();
  }, []);

  const handleComponents = useCallback(
    () => (
      <TouchableOpacity
        onPress={onPowerPressed}
        style={styles.powerBtnContainer}>
        <Image
          source={require('../../../../assets/images/power-button.png')}
          // @ts-ignore
          style={styles.powerBtnImg}
        />
      </TouchableOpacity>
    ),
    [],
  );

  useEffect(() => {
    const _region = {
      longitudeDelta: 150,
      latitudeDelta: 150,
    } as Region;
    setTimeout(() => {
      mapRef.current && mapRef.current.animateToRegion(_region, 2000);
    }, 500);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={styles.mapContainer}
        mapType={'satelliteFlyover'}
      />

      <HomeHeader />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        backgroundStyle={styles.modalBackground}
        snapPoints={snapPoints}
        handleComponent={handleComponents}>
        <View style={styles.modalContent}>
          <View style={styles.divider} />
          <Text style={styles.contactText}>Contact</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
