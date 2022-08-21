import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import { Container, Header, Icon, Input, Item, Text, StatusBar, Box, HStack, IconButton, VStack, Heading, Ionicons } from 'native-base'
import ProductList from "./ProductList.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchedProducts from './SearchedProducts.js';
import Banner from "../../Shared/Banner"
import CategoryFilter from "./CategoryFilter"

const data = require('../../assets/data/products.json')
const productsCategories = require('../../assets/data/categories.json')

var { height } = Dimensions.get('window')

const ProductContainer = () => {

  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([])
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([])
  const [active, setActive] = useState()
  const [initialState, setInitialState] = useState([])






  useEffect(() => {
    setProducts(data)
    // console.log(products)
    setProductsFiltered(data);
    // console.log('productsFiltered' , productsFiltered)
    setFocus(false)
    // console.log(focus)
    setCategories(productsCategories)
    // console.log(productsCategories)
    setActive(-1)
    setInitialState(data)
    setProductsCtg(data)


    return () => {
      setProducts([])
      // console.log(products)
      setProductsFiltered([]);
      setFocus()
      setCategories([])
      setActive()
      setInitialState([])
      setProductsCtg([])
    }
  }, [])




  const SearchedProduct = (text) => {
    // console.log(text.toLowerCase())
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    )
  }


  const openList = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }

  //Categories
  const changeCtg = (ctg) => {
    {
      ctg === 'all'
        ?
        [setProductsCtg(initialState), setActive(true)]
        : [
          setProductsCtg(
            products.filter((i) => i.category._id === ctg), //here may be error
            setActive(true)
          ),
        ]
    }
  }

  return (
    <>

      {/* <Box safeAreaTop /> */}
      <HStack py="3" justifyContent="space-between" alignItems="center" w="900%" maxW="350">
        <HStack >
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            borderWidth="0"
            InputLeftElement={<FontAwesome style={{ paddingLeft: 10 }} name="search" size={20} color="black" />}
            onFocus={openList}
            InputRightElement={
              focus == true ?
                <FontAwesome name="close" style={{ paddingRight: 10 }} size={20} color="black" onPress={onBlur} />
                : null
            }

            onChangeText={(text) => SearchedProduct(text)}
          />

        </HStack>
      </HStack>
      {/* {console.log(focus)} */}

      {focus == true ? (
        <SearchedProducts
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View><Banner /></View>
            <View><CategoryFilter
              categories={categories}
              CategoryFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            /></View>

            {productsCtg.length > 0 ?
              (
                <View style={styles.listContainer}>
                  {
                    productsCtg.map((item) => {
                      return (
                        <ProductList
                          key={item._id.$oid}
                          item={item}
                        />
                      )
                    })
                  }

                </View>
              ) : (
                <View style={[styles.center, { height: height / 2 }]}>
                  <Text>No products found</Text>
                </View>
              )

            }


            {/* <View style={styles.container}>
              <View style={styles.listContainer}>
                <FlatList

                  key={'#'}
                  // horizontal
                  numColumns={2}
                  data={products}
                  renderItem={({ item }) => <ProductList
                    key={item.brand}
                    item={item}
                  />}
                  keyExtractor={(item) => item.brand}
                />
              </View>
            </View> */}
          </View>
        </ScrollView>

      )}

    </>

  )
}

const styles = StyleSheet.create({
  container: {
    // flexDirection:"row",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    paddingBottom: 50,
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    marginBottom: 100,
  }, center: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductContainer