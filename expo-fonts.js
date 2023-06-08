import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'MyCustomFont': require('./assets/fonts/myFont.ttf'),
  });
};