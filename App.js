import { LogBox } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'

//Navigators
import Main from './src/Navigators/Main'


//screens
import ProductContainer from './src/Screens/Products/ProductContainer'
import Header from "./src/Shared/Header"

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <NativeBaseProvider>
          <Header />
          <Main />
      </NativeBaseProvider>
    </NavigationContainer>

  )
}

export default App
