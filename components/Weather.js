import React from 'react';
import { View, Text, Image } from 'react-native';

export default Weather = ({ styleView, textStyle, iconStyle, currentWeather }) => {
  if (currentWeather) {
    const city = `${currentWeather.name}, ${currentWeather.sys.country}`;
    const iconURL = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
    return (
      <View style={styleView}>
        <Text style={textStyle}>{city}</Text>
        <Image source={{ uri: iconURL }} style={iconStyle}></Image>
        <Text style={textStyle}>{currentWeather.weather[0].main}</Text>
        <Text style={textStyle}>Actual: {currentWeather.main.temp.toFixed()} F</Text>
        <Text style={textStyle}>Feels like: {currentWeather.main.feels_like.toFixed()} F</Text>
      </View>
    );
  } else {
    return null;
  }
};