import { View, Text, StyleSheet,LogBox } from 'react-native'
import React from 'react'
import ProductContainer from './src/Screens/Products/ProductContainer'
import Header from "./src/Shared/Header"
import { NativeBaseProvider } from 'native-base';
// import Banner from "./src/Shared/Banner"
const App = () => {
  LogBox.ignoreAllLogs()
  return (

    <NativeBaseProvider>
      <View style={styles.container}>
        <Header/>
        <ProductContainer />
        {/* <Banner/> */}
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
