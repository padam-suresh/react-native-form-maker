import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface CustomTextInputStyles {
  input: TextStyle;
}

export const textInputStyles = StyleSheet.create<CustomTextInputStyles>({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginHorizontal: 100,
  },
});

interface Styles {
  container: ViewStyle;
  formInputContainer: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  formButtonContainer: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formInputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  formButtonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

interface CustomButtonStyles {
  buttonContainer: ViewStyle;
}
export const customButtonStyles = StyleSheet.create<CustomButtonStyles>({
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

interface TitleStyles {
  container: ViewStyle;
  title: ViewStyle;
}
export const titleStyles = StyleSheet.create<TitleStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

interface ActivityIndicator {
  activityIndicator: ViewStyle;
}
export const activityIndicator = StyleSheet.create<ActivityIndicator>({
  activityIndicator: {
    marginTop: 20,
  },
});
