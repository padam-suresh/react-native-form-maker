import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

interface PasswordProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

const Password: React.FC<PasswordProps> = ({
  placeholder,
  value,
  name,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        secureTextEntry={!isPasswordVisible}
        onChangeText={text => onChange(name, text)}
        maxLength={100}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={togglePasswordVisibility}>
        <Image
          source={
            isPasswordVisible
              ? require('../assets/eye-open.png')
              : require('../assets/eye-closed.png')
          }
          style={styles.toggleImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 5,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  toggleButton: {
    padding: 10,
  },
  toggleImage: {
    width: 24,
    height: 24,
  },
});

export default Password;
