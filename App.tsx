import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import GymScreen from './components/GymScreen'
import CalorieScreen from './components/CalorieScreen'

const GymNav = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <GymNav.Navigator
        initialRouteName='GymScreen'
        activeColor='green'
        inactiveColor='white'
        barStyle={{ backgroundColor: 'lightblue' }}
      >
        <GymNav.Screen
          name='GymScreen'
          component={GymScreen}
          options={{
            tabBarLabel: 'Gym Tasks',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='arm-flex' size={24} color={color} />
            ),
          }}
        />
        <GymNav.Screen
          name='CalorieScreen'
          component={CalorieScreen}
          options={{
            tabBarLabel: 'Calorie Calculator',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='food' size={24} color={color} />
            ),
          }}
        />
      </GymNav.Navigator>
    </NavigationContainer>
  )
}
