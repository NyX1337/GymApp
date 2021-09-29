import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Text style={styles.todoText}>TODO APP</Text>
        <Icon name='delete' size={25} color='red' />
      </View>
      <View style={styles.footer}>
        <View style={styles.container}></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
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
    bottom: 0,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  container: {},
})
