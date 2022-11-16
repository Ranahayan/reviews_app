import { StyleSheet, Text, View } from "react-native";
import Home from "./app/home.js";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { useState } from "react";

const getFonts = () =>
  Font.loadAsync({
    "Nunito-medium": require("./assets/Nunito-Medium.ttf"),
    "Nunito-regular": require("./assets/Nunito-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }


  return (
  <Home />
  )
}
