import { LogBox, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'

//Navigators
import Main from './src/Navigators/Main'

//Redux
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

//screens
import ProductContainer from './src/Screens/Products/ProductContainer'
import Header from "./src/Shared/Header"

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <NativeBaseProvider >
        <NavigationContainer >
          <Header />
          <Main />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>


  )
}

export default App
