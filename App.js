import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProductContainer from './src/Screens/Products/ProductContainer'
import Header from "./src/Shared/Header"
import { NativeBaseProvider } from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header />
        <ProductContainer />
      </View>
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: "center"
  },
});

export default App
