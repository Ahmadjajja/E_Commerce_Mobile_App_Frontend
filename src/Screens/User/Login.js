import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';



const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <FormContainer title={"Login"} >
            <Input
            placeholder={"Enter Email"}
            name={"email"}
            id={"email"}
            value={email}
            onChangeText={ (Text) => setEmail(Text)}
            />
            <Input
            placeholder={"Enter Password"}
            name={"password"}
            id={"password"}
            value={password}
            onChangeText={ (Text) => setPassword(Text)}
            secureTextEntry={true}
            />
            <View style={styles.buttonGroup}>
            <Button title="Login"/>
            </View>
            <View style={[{marginTop: 40},styles.buttonGroup]}>
            <Text style={styles.middleText}>
                Don't have an account yet?
            </Text>
            <Button
            title="Register" onPress={() => props.navigation.navigate("Register")}
            />
            </View>
        </FormContainer >
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        alignItems: 'center'
    },
    middleText: {
        marginBottom: 20,
        alignSelf: "center"
    }
})

export default Login;