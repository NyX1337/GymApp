import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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

const GymNav = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <GymNav.Screen name='GymScreen' component={GymScreen} />
      <GymNav.Screen name='CalorieScreen' component={CalorieScreen} />
    </NavigationContainer>
  )
}
