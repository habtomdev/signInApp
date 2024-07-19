import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("LOGIN");
    };
    return (
        <View style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={styles.logo} />
            {/* added logo */}
            <Image source={require("../assets/Group-img.png")} style={styles.group} />
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.subtitle}>Welcome!</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtnWrapper} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Log-In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signinBtnWrapper}>
                    <Text style={styles.signinBtnText}>Sign-Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        marginTop: 25,
        marginBottom: 60,
    },

    group: {
        height: 330,
        width: 330,
        margin: 20,
    },

    title: {
        fontSize: 50,
        fontFamily: fonts.Regular,
        color: 'black',
    },

    subtitle: {
        fontFamily: fonts.Regular,
        fontSize: 35,
        color: "darkblue",
    },

    btnContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "black",
        width: "90%",
        height: 70,
        marginTop: 30,
        borderRadius: 100,
    },

    loginBtnWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "55%",
        backgroundColor: "black",
        borderRadius: 100,
    },

    loginBtnText: {
        fontFamily: fonts.Bold,
        color: colors.cream,
        fontSize: 20,
    },

    signinBtnWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
    },

    signinBtnText: {
        color: "black",
        fontSize: 20,
        fontFamily: fonts.Bold,
    },

});

