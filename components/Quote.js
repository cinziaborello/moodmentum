import React from 'react';
import { Text } from 'react-native';

export default Quote = ({ quoteData, style }) => (
  <Text style={style}>"{quoteData[0].quote}" - {quoteData[0].author}</Text>
);
