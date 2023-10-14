import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  //@ts-ignore
  mapContainer: [StyleSheet.absoluteFill, { marginBottom: '30%' }],
  powerBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: -40,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  powerBtnImg: { height: 74, width: 68 },
  modalContent: { flex: 1, alignItems: 'center', marginHorizontal: 16 },
  modalBackground: { backgroundColor: 'grey' },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'white',
    marginTop: '25%',
  },
  contactText: { paddingTop: 20, fontSize: 17, color: 'white' },
});
