import React from "react";
import { View, Text } from "react-native";

export default function UserHeader({ nombre, ocupacion }) {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {nombre}
      </Text>
      <Text>Ocupación: {ocupacion}</Text>
    </View>
  );
}