import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtEmail}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={[styles.button, styles.outlineButton]}
      >
        <Text style={styles.outlineButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
    marginTop: 50,
  },
  outlineButton: {},
  txtEmail: {},
  outlineButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
