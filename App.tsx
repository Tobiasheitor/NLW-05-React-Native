import React from 'react';
import { UserIdentification } from './src/pages/UserIdentification';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { Confirmation } from './src/pages/Confirmation';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Confirmation />
  )
}
