import React from 'react';
import {View, Text} from 'react-native';
import {titleStyles} from '../styles/commonStyles';

interface CustomTitleProps {
  title?: string | null;
}

const CustomTitle: React.FC<CustomTitleProps> = ({title}) => {
  return (
    <View style={titleStyles.container}>
      <Text style={titleStyles.title}>{title}</Text>
    </View>
  );
};

export default CustomTitle;
