import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingLeft: 24 },
  textStyling: {
    fontFamily: "Nunito-medium",
    fontSize: 18,
  },
});
