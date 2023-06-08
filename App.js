import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loadFonts } from './expo-fonts';
import NewStartViewComponent from './components/NewStartViewComponent';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAppFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    loadAppFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <NewStartViewComponent />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};


export default App;