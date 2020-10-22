import React from 'react';
import { Text } from 'react-native';

export default Time = ({ style }) => {
  const time = new Date().toTimeString().slice(0, 9);
  return (
    <Text style={style}>{time}</Text>
  );
};
