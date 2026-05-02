# Perfil-De-Usuario-Con-Informacion_Detallada

UserProfile.js
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

UserHeader.js
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

UserDetails.js
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

App.js
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
