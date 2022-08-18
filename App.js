import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ProductContainer from './src/Screens/Products/ProductContainer'
const App = () => {
  return (
    <View style={styles.container}>
      <ProductContainer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      // flex:1,
      // backgroundColor: "#ccc",
      // justifyContent:'center',
      // alignItems: "center"
  },
});

export default App
