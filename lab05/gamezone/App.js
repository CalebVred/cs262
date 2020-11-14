/**
 * @author: chv5
 */
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './routes/drawer';

/** 
 * Function getFonts loads the nunito bold and regular fonts for the app
 */
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

/**
 * Default export function of App.js
 */
export default function App() {
  /**
   * setFontsLoaded loads the fonts and sets fontsLoaded to true
   * @param {boolean} fontsloaded shows if the nunito fonts are loaded
   * @param {}
   */
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}