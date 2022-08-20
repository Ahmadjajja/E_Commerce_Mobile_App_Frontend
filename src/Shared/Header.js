import React from 'react'
import { View, Text, StyleSheet, Image,SafeAreaView } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      {/* <Text>Header</Text> */}
      <Image
      source={require('../assets/Logo.png')}
      resizeMode="contain"
      style={{height: 50}}
      />
    </SafeAreaView>
  )

}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignContent: 'center',
        justifyContent: 'center',
        paddding: 20,
        marginTop: 80, //Todo: Delete
    }
  })