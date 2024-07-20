import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useTransition } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtnWrapper}
            onPress={handleGoBack} >
                <Ionicons name={"arrow-back-circle-outline"} 
                color={"black"}
                size={55}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Hello, </Text>
                <Text style={styles.text2}>Welcome </Text>
                <Text style={styles.text3}>Back </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Entypo name={"email"}
                        size={23}
                        color="black"
                    />
                    <TextInput style={styles.textInput} placeholder='Please write your email'
                    placeholderTextColor={colors.gray}/>
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name={"lock"}
                        size={23}
                        color="black"
                    />
                    <TextInput style={styles.textInput} placeholder='Password'
                    placeholderTextColor={colors.gray}
                    secureTextEntry={true}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
        padding: 20,
    },

    backBtnWrapper: {
        marginTop: 30,
        marginBottom: 50,
    },

    text1: {
        fontSize: 40,
        color: "darkblue",
        fontFamily: fonts.Bold,
    },
    
    text2: {
        fontSize: 40,
        color: "black",
        fontFamily: fonts.Regular
    },

    text3: {
        fontSize: 40,
        color: "black",
        fontFamily: fonts.Regular
    },

    formContainer: {
        marginTop: 30,
    },

    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        marginTop: 25,
    },

    textInput: {
        paddingLeft: 10,
        flex: 1,
        fontSize: 20,
        alignItems: "center",
        paddingTop: 20,
        color: "black"
    },

    forgotPass: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "right",
        color: "black",
        fontFamily: fonts.Medium,
    },

    loginBtn: {
        fontSize: 20,
        textAlign: "center",
        borderWidth: 2,
        marginTop: 20,
        borderRadius: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "black",
        color: "white",
        fontFamily: fonts.Medium
    }
})