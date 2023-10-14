import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  avatar: {
    backgroundColor: 'gray',
    height: 92,
    width: 92,
    borderRadius: 50,
    alignSelf: 'center',
  },
  label: {
    color: 'rgba(29, 29, 31, 0.6)',
    fontSize: 13,
    paddingLeft: 18,
    paddingTop: 16,
  },
  listContainer: {
    backgroundColor: 'white',
    height: 88,
    borderRadius: 10,
    marginTop: 7,
    paddingTop: 2,
  },
  itemContainer: {
    paddingVertical: 11,
    paddingLeft: 16,
  },
  menuLabel: {
    fontSize: 17,
    fontWeight: '400',
  },
  divider: {
    width: '100%',
    backgroundColor: 'gray',
    height: 0.2,
    position: 'absolute',
    right: 0,
  },
});
