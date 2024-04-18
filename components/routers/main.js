import React from 'react';
import Authorization from './authorization';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authorization"
        component={Authorization}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />    
    </Stack.Navigator>
  );
};

export default Main;
