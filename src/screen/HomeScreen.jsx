import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={styles.logo}/>
            {/* added logo */}
            <Image source={require("../assets/Group-img.png")} style={styles.group}/>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.subtitle}>Welcome!</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtnWrapper}>
                    <Text style={styles.loginBtnText}>Log-In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signinBtnWrapper}>
                    <Text style={styles.loginBtnText}>Sign-Up</Text>
                </TouchableOpacity>
            </View>
                
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 30,
        color: colors.cream,
    },
    
    logo: {
        height: 60,
        width: 180,
        marginTop: 30,
        marginBottom: 80,
    },

    group: {
        height: 330,
        width: 330,
        margin: 30,
    },

    title: {
        fontSize: 40,
        fontFamily: fonts.Regular,
        color: 'black',
    },

    subtitle: {
        fontFamily:fonts.Regular,
        fontSize: 30,
        color: "darkblue",
    },

    btnContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "black",
        width: "90%",
        height: 60,
        marginTop: 50,
        borderRadius: 100,
    },

    loginBtnWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        backgroundColor: "black",
        borderRadius: 100,
    },

    loginBtnText: {
        fontFamily: fonts.Bold,
        color: colors.cream,
        fontSize: 20,
    },

    signinBtnWrapper: {

    },

})

