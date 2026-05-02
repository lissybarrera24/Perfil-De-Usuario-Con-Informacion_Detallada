import React from "react";
import { View, ScrollView } from "react-native";
import UserProfile from "./UserProfile";

export default function App() {
  const users = [
    {
      nombre: "Lissy Barrera",
      edad: 20,
      ciudad: "Tegucigalpa",
      ocupacion: "Estudiante",
    },
    {
      nombre: "Carlos Pérez",
      edad: 28,
      ciudad: "San Pedro Sula",
      ocupacion: "Ingeniero",
    },
  ];

  return (
    <ScrollView>
      <View>
        {users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </View>
    </ScrollView>
  );
}