import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../Screen/SearchScreen';


const Stack = createStackNavigator();


export default function TopNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )


}