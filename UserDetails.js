import React from "react";
import { View, Text } from "react-native";

export default function UserDetails({ edad, ciudad }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text>Edad: {edad}</Text>
      <Text>Ciudad: {ciudad}</Text>
    </View>
  );
}