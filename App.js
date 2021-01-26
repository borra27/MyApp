import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';

import Authorized from './view/authorized';
import Unauthorized from './view/unauthorized';
import { getToken } from './common/asyncStorage';

const App = () => {
  const [token, setToken] = useState('');
  getToken().then(token => setToken(token));

  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <NavigationContainer>
      {token ? <Authorized/> : <Unauthorized/>}
    </NavigationContainer>
  )
};

// const styles = StyleSheet.create({
// });

export default App;
