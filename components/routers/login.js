import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import { auth } from "../../src/firebase";
  import { useNavigation } from "@react-navigation/native";
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigation = useNavigation();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.replace("Tab");
        }
      });
  
      return unsubscribe;
    }, []);
  
    const handleSingIn = () => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with: " + user.email);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.message);
        });
    };
  
    const handleSignup = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with: " + user.email);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.message);
        });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttons}>
          <Button title="SignIn" onPress={handleSingIn} />
          <View style={styles.space}></View>
          <Button title="SignUp" onPress={handleSignup} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
    },
    buttons: {
      justifyContent: 'center',
      flexDirection:'row',
      alignItems:'center',
    },
    space: {
      width: 20,
      height: 20,
    },
  });
  
  export default Login;