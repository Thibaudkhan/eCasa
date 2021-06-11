import React, {Component} from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {RoomClass} from "../Components/ListComponent";
import {MoodClass} from "../Components/MoodComponent";
import Details from "../Components/Details"
const Stack = createStackNavigator();


function MyTabs() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Room" component={RoomClass} />
            <Stack.Screen name="Mood" component={MoodClass} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default function HomeNavigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}