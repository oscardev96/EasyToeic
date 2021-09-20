
import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, Pressable, KeyboardAvoidingView, Platform, Keyboard} from 'react-native'
import {iconGoogle, logo} from '../assets/index'
import { COLORS, FONTS } from '../constants/theme'
import { Input } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';


const LoginScreen = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
      
    const onPressLogin = () => {

    }

    const onPressSignUp = () => {
        
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Pressable style={{flex:1}} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...FONTS.h1, color: COLORS.white, marginTop: 20 }}>Easy Toeic</Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <View style={{ marginHorizontal: 20 ,}}>
                            <Input
                                placeholder='Email or phone'
                                rightIcon={<Icon name='user' size={24} color={COLORS.darkgray} />}
                                onChangeText={(text) => setUserName(text)}
                                inputStyle={{ fontSize: 14 }}
                                inputContainerStyle={{ borderColor: COLORS.lightGray }}
                            />
                            {/*=======password=======*/}
                            <Input
                                placeholder='Password'
                                rightIcon={<Icon name='lock' size={24} color={COLORS.lightGray} />}
                                onChangeText={(text) => setPassword(text)}
                                inputStyle={{ fontSize: 14 }}
                                inputContainerStyle={{ borderColor: COLORS.lightGray }}
                                secureTextEntry={true}
                            />
                        </View>
                        <Pressable style={styles.button} onPress={onPressLogin}>
                                <Text style={{...FONTS.h4, color:COLORS.white}}>Login</Text>
                        </Pressable>
                        <View style={{ marginTop: 10, flex:1, justifyContent:"space-between", paddingBottom:20 }}>
                            <Text style={{ ...FONTS.body4, textAlign: "center", color: COLORS.lightGray, marginTop:20 }}>Or via social media</Text>
                            <View style={styles.row}> 
                                <Pressable style={styles.boxIcon}>
                                    <Icon name="facebook" size={24} color={COLORS.primary}/>
                                </Pressable>
                                <Pressable style={styles.boxIcon}>
                                    <Icon name="google" size={24} color={COLORS.primary} />
                                </Pressable>
                            </View>
                            <Text style={{...FONTS.body4, color:COLORS.lightGray, textAlign:"center"}}>
                                Don’t you have account? <Text style={{ ...FONTS.h4, color: COLORS.primary }}
                                    onPress={onPressSignUp}
                                >Sign up</Text>
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </Pressable>
    </KeyboardAvoidingView>

    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    },
    header: {
        width:"100%",
        height: "45%",
        backgroundColor: COLORS.primary,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center",
        alignItems:"center"
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode:"contain"
    },
    button: {
        width: "70%",
        height: 50,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
      
    },
    boxIcon: {
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        width: 50,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:COLORS.white
    }
})
