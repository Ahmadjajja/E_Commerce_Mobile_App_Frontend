import { ScrollView, Dimensions, StyleSheet, Text } from 'react-native'
import React from 'react'

var { width } = Dimensions.get('window');

const FormContainer = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text contentContainerStyle={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom: 40
    },
    title: {
        fontsize: 30,
        fontWeight: "bold"
    }
})

export default FormContainer