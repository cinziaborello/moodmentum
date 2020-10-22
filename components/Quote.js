import React from 'react';
import { Text } from 'react-native';

export default Quote = ({ data, style }) => (
  <Text style={style}>"{data[0].quote}" - {data[0].author}</Text>
);
