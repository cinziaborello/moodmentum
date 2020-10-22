import React from 'react';
import { Text } from 'react-native';

export default Day = ({ style }) => {
  const today = new Date().toDateString();
  return (
    <Text style={style}>{today}</Text>
  );
};
