import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  blueButton: {
    backgroundColor: '#3498db',
    marginBottom: 10,
    width: '100%',
  },
  whiteButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#3498db',
    width: '100%',
  },
  whiteButtonText: {
    color: '#ffffff',
  },
  blueButtonText: {
    color: '#3498db',
  },
});