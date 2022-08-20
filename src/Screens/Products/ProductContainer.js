import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import { Container, Header, Icon, Input, Item, Text } from 'native-base'
import { NativeBaseProvider } from 'native-base';
import ProductList from "./ProductList.js";

const data = require('../../assets/data/products.json')
// var { height } = Dimensions.get('window')

const ProductContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data)
    return () => {
      setProducts([])
    }
  }, [])

  return (
    <NativeBaseProvider>
    {/* {Your other components} */}
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="android-search" />
          <Input
            placeholder='Search'
          //onfocus={}
          //onChangeText= {( text )=> }
          />
        </Item>
      </Header>

      <View style={styles.container}>
        <Text>ProductContainer</Text>
        <View style={styles.listContainer}>
          <FlatList
            horizontal

            data={products}
            renderItem={({ item }) => <ProductList
              key={item.id}
              item={item}
            />}
            keyExtractor={(item) => item.name}
          />
        </View>


      </View>
    </Container>
</NativeBaseProvider>

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

export default ProductContainer