import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%',
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonContainer:{
        width:'60%',
        marginTop: 40,

    },
    button:{
        backgroundColor: '#2596be',
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,

    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    outlineButton:{
        backgroundColor: 'white',
        marginTop: 7,

    },
    outlineButtonText:{
        color: '#2596be',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
