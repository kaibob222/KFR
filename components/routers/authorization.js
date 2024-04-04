import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Authorization = ({navigation}) => {

return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('Tab')} >
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inconsalata',
    fontWeight:'bold',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#B8B8B8',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
  },
});
export default Authorization;