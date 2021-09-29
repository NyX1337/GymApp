import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Text style={styles.todoText}>TODO APP</Text>
        <MaterialCommunityIcons name='delete' size={25} color='red' />
      </View>
      <View style={styles.footer}>
        <View style={styles.container}>
          <TextInput placeholder='Add Items' />
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name='add' size={24} color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'blue',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'white',
    elevation: 10,
    flex: 1,
    height: 50,
    marginRight: 30,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    elevation: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
