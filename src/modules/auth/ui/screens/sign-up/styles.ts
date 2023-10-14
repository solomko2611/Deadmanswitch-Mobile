import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#333',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  inputWrapperFocused: {
    borderColor: '#3498db',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: '#333',
  },
  iconWrapper: {
    marginTop: 20,
  },
  passwordWarning: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningText: {
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  blueButton: {
    backgroundColor: '#3498db',
    marginBottom: 10,
    width: '100%',
  },
  whiteButtonText: {
    color: '#ffffff',
  },
});
