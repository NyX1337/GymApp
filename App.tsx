import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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

const GymNav = createNativeStackNavigator()

export default function App() {
  return (
    <GymNav.Navigator>
      <GymNav.Screen name='GymScreen' component={GymScreen} />
      <GymNav.Screen name='CalorieScreen' component={CalorieScreen} />
    </GymNav.Navigator>
  )
}
