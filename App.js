import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import TodoList from "./src/Components/TodoList"
const App = () => {
  return (
    <View style={styles.container}>
      <TodoList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#ccc",
      justifyContent:'center',
      alignItems: "center"
  },
});

export default App
