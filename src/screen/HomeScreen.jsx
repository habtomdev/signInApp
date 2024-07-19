import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={styles.logo}/>
            {/* added logo */}
            <Image source={require("../assets/Group-img.png")} style={styles.group}/>
            <Text style={styles.title}>WELCOME</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",

    },
    
    logo: {
        height: 60,
        width: 180,
    },

    group: {
        height: 330,
        width: 330,
        margin: 30,
    },

    title: {
        fontSize: 40,
        fontFamily: fonts.Regular,
    },
})

