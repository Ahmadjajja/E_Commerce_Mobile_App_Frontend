import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native'


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
      <View style={{ marginTop: 100 }}>

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

  )
}

// const styles = StyleSheet.create({
//   container: {
//       flex:1,
//       backgroundColor: "#ccc",
//       justifyContent:'center',
//       alignItems: "center"
//   },
// });

export default ProductContainer