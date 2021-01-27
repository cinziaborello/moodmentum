import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, ImageBackground, Text } from 'react-native';
import { API_KEY } from './env/openWeather.js';
import Day from './components/Day.js';
import Time from './components/Time.js';
import Quote from './components/Quote.js';
import Weather from './components/Weather.js';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [quoteData, setQuoteData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    getWeather();
  }, []);

  const getQuote = async () => {
    await fetch('https://quotes.rest/qod')
      .then((response) => response.json())
      .then((json) => setQuoteData(json.contents.quotes))
      .catch((error) => console.error(error))
      .then(() => setLoading(false));
  };

  const getWeather = async () => {
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=oakland,ca,us&units=imperial&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setCurrentWeather(json))
      .catch((error) => console.error(error))
      .then(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <ImageBackground source={{uri: quoteData[0].background}} style={styles.image}>
          <Time style={styles.time} />
          <Day style={styles.day} />
          <Weather styleView={styles.weather} textStyle={styles.weatherText} iconStyle={styles.weatherIcon} currentWeather={currentWeather} />
          <Quote style={styles.quote} quoteData={quoteData} />
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    flex: 0.1,
  },
  day: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    flex: 0.1,
  },
  weather: {
    flex: 0.3,
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    paddingTop: 10
  },
  weatherIcon: {
    width: 120,
    height: 120,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  weatherText: {
    textAlign: 'center',
    fontSize: 20
  },
  quote: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'center',
    flex: 0.2,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
});
