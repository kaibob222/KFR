import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import TaskManager from '../screens/Tasks/tasks';
import Notes from '../screens/notes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tasks"
        component={TaskManager}
        options={{
          tabBarIcon: ({focused}) => (
            null
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({focused}) => (
            null
          ),
        }}
      />
      
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});

export default TabNavigator;
