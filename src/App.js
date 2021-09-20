import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import screen
import SplashScreen from './screens/SplashScreen';
import ScreenName from './constants/ScreenName';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigation from './navigation/DrawerNavigation';
const Stack = createNativeStackNavigator()
const App = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.Screen_SplashScreen} screenOptions={{headerShown:false}}>
                <Stack.Screen name={ScreenName.Screen_SplashScreen} component={SplashScreen} />
                <Stack.Screen name={ScreenName.Screen_LoginScreen} component={LoginScreen} />
                <Stack.Screen name = {ScreenName.Screen_MainScreen} component={DrawerNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
