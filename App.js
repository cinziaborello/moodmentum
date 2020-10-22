import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, ImageBackground } from 'react-native';
import Day from './components/Day.js';
import Time from './components/Time.js';
import Quote from './components/Quote.js';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://quotes.rest/qod')
      .then((response) => response.json())
      .then((json) => setData(json.contents.quotes))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <ImageBackground source={{uri: data[0].background}} style={styles.image}>
          <Time style={styles.time} />
          <Day style={styles.day} />
          <Quote style={styles.quote} data={data} />
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
  // weather: {
  //   flex: 0.2,
  // },
  // mood: {
  //   flex: 0.3,
  // },
  quote: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'center',
    flex: 0.2,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
