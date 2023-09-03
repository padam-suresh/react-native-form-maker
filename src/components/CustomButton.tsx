import React from 'react';
import {Button, View} from 'react-native';
import {customButtonStyles} from '../styles/commonStyles';

interface CustomButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  submitUrl?: string;
  onPress: (submitUrl: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  backgroundColor = 'blue',
  color = '#FFFFFF',
  submitUrl = '',
}) => {
  const handleChange = () => {
    onPress(submitUrl);
  };
  return (
    <View style={[customButtonStyles.buttonContainer, {backgroundColor}]}>
      <Button title={label || 'Submit'} color={color} onPress={handleChange} />
    </View>
  );
};

export default CustomButton;
