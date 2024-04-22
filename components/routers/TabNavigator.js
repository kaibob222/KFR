import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import TaskManager from '../screens/Tasks/tasks';
import Notes from '../screens/notes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'flex',
        },
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={TaskManager}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/icons/task_icon_active.png') : require('../../assets/icons/task_icon_inactive.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/icons/notes_icon_active.png') : require('../../assets/icons/notes_icon_inactive.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 30,
  },
});

export default TabNavigator;
