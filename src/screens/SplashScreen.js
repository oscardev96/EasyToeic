import React, {useState, useEffect} from 'react'
import { View, Image , StyleSheet} from 'react-native'
import { COLORS, FONTS } from '../constants/theme'
import { logo } from "../assets/index";
import ScreenName from '../constants/ScreenName';

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(ScreenName.Screen_LoginScreen)
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <Image source={logo} style={{
                width: 100,
                height: 100,
                resizeMode:"contain"
            }}/>
        </View>
    )
}

export default SplashScreen
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        
    }
})
