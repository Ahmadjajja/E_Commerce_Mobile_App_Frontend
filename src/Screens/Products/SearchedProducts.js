import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import { Avatar, VStack, ListItem, Thumbnail, Text, HStack, Divider } from 'native-base';

var { width } = Dimensions.get("window")

const SearchedProducts = (props) => {
    const { productsFiltered } = props;
    return (
        <View style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (<>
                    {/* <ListItem
                        onPress={() => {
                            props.navigation.navigate("Product Detail", {item: item})
                        }}
                        key={item._id.$oid}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source={{uri: item.image ? 
                                    item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                        }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem> */}

                    <VStack space={3} divider={<Divider />} w="90%" key={item._id.$oid} avatar >
                        <HStack justifyContent="space-between">
                            <Avatar size="lg" style={{width:"20%"}} source={{
                                uri: item.image ?
                                    item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }} />
                            <View style={{width:"80%",paddingLeft:20,paddingBottom:20,}}>
                                <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                                <Text>{item.description}</Text>
                            </View>

                        </HStack>
                    </VStack>
                </>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
})

export default SearchedProducts;