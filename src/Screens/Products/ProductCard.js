import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';

var { width } = Dimensions.get("window")

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: image ? image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png", }}
            />
                  <Image
        style={styles.stretch}
        source={{uri: "https://www.bing.com/images/search?view=detailV2&ccid=gHYgFANQ&id=0897D7AAAEA18A8DDC02FAD828153A1BD89AB8CB&thid=OIP.gHYgFANQ8_lTicSEbmqHPAHaLx&mediaurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fsunset-waterfall-picture-id483822568&exph=1024&expw=644&q=image&simid=608019592610644593&form=IRPRST&ck=93E9C17148F01B805B4C65B2768162BA&selectedindex=8&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.807620140350f3f95389c4846e6a873c%3Frik%3Dy7ia2Bs6FSjY%252bg%26pid%3DImgRaw%26r%3D0&vt=0&sim=11"}}/>
            {console.log("image", image)}
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + "..." : name 
                }
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
            {countInStock > 0 ? (
                <View style={{marginBottom: 60}}>
                    <Button title={'Add'} color={'green'} />
                </View>
            ) : <Text style={{ marginTop: 100 }}>Currently Unavailable</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        elevation: 8,
        backgroundColor: "white"

    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
});

export default ProductCard