import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { loadFonts } from './expo-fonts';
import NewStartViewComponent from './components/NewStartViewComponent';
import { NavigationContainer } from '@react-navigation/native';
import WorkSpaceComponent from './components/WorkSpaceComponent';
const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showAgain, setShowAgain] = useState(false);

  useEffect(() => {
    const loadAppFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    AsyncStorage.getItem('showAgain').then(e => {
      if (e != null) {
        setShowAgain(true);
      }
    });

    loadAppFonts();

  }, []);
// loading font
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

// do not show first screen again
  if (showAgain) {
    return (<NavigationContainer>
      <WorkSpaceComponent />
      <StatusBar style="auto" />
    </NavigationContainer>);
  }

// show first screen again
  return (
    <NavigationContainer>
      <NewStartViewComponent />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};


export default App;