import React, { useState, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(() => {
    saveTodoOnDevice()
  }, [todos])

  useEffect(() => {
    getTodoOnDevice(todos)
  }, [])

  function ListItem({ todo }) {
    return (
      <View style={styles.listItems}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}
          >
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.Icons]}
            onPress={() => todoComplete(todo?.id)}
          >
            <Ionicons name='checkmark-done' size={20} color='white' />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.Icons, { backgroundColor: 'red' }]}
          onPress={() => deleteTodo(todo?.id)}
        >
          <MaterialCommunityIcons name='delete' size={24} color='white' />
        </TouchableOpacity>
      </View>
    )
  }

  const saveTodoOnDevice = async (todos?) => {
    try {
      const stringifyTodos = JSON.stringify(todos)
      await AsyncStorage.setItem('@storage_Key', stringifyTodos)
    } catch (e) {
      console.log(e)
    }
  }

  const getTodoOnDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos')
      if (todos != null) {
        setTodos(JSON.parse(todos))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addTodo = () => {
    if (textInput === '') {
      alert('Molimo Vas upišite nešto u traženo polje')
    } else {
      const newTodo = {
        task: textInput,
        completed: false,
      }
      setTodos([...todos, newTodo])
      setTextInput('')
    }
  }

  const todoComplete = (todoId) => {
    const newTodo = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true }
      }
      return item
    })
    setTodos(newTodo)
  }

  const deleteTodo = (todoId) => {
    const newTodo = todos.filter((item) => item.id != todoId)
    setTodos(newTodo)
  }

  const deleteAllTodo = () => {
    Alert.alert('Upozorenje', ' Da li želite izbrisati sve?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ])
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Text style={styles.todoText}>TODO APP</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name='delete'
            size={25}
            color='red'
            onPress={deleteAllTodo}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.container}>
          <TextInput
            placeholder='Add Items'
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
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
    marginTop: 40,
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
    backgroundColor: 'white',
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
  Icons: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 3,
    flexDirection: 'row',
  },
  listItems: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 15,
    borderRadius: 8,
  },
  addItemsText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})
