import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

interface CustomTextInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
}) => {
  const handleChange = (text: string) => {
    onChange(name, text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
      />
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
});
export default CustomTextInput;
