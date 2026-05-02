import React from "react";
import { View, StyleSheet } from "react-native";
import UserHeader from "./UserHeader";
import UserDetails from "./UserDetails";

export default function UserProfile({ user }) {
  return (
    <View style={styles.card}>
      <UserHeader
        nombre={user.nombre}
        ocupacion={user.ocupacion}
      />

      <UserDetails
        edad={user.edad}
        ciudad={user.ciudad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
});