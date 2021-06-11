import React, {Component} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {List} from './List'
import {Alert, ImageBackground, StyleSheet, Text, View,TextInput } from "react-native";
import Details from './Details';

class Mood extends Component {



    state = {
        rooms: [
            {
                name: "cozy",
                id: 'cozy',
            }
        ]
    };


    async getRooms(){
        const roomsResponses = await  fetch('http://10.0.2.2:3000/getAllMoods',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });

        const rooms = await roomsResponses

        this.setState({rooms:rooms})

    }

    async componentDidMount() {
        console.log("start")
        await  this.getRooms()
        this.focusListener  = this.props.navigation.addListener("focus",async () => {
            console.log("start 2")
            await  this.getRooms()

        });

    }

    componentWillUnmount() {
        // remove event listener
        if (this.focusListener != null && this.focusListener.remove) {
            this.focusListener.remove();
        }
    }





    render() {

        let rooms = this.state.rooms;
        const {navigation}= this.props;

        return(
            <List
                navigation={navigation}
                rooms={rooms}
                typeOfRoute={"Details"}
            />
        )
    }
}

function ShowDetailsScreen({route}) {

    return (
        <Details/>
    )
}
function ShowNewRoomScreen({route}) {

    return (
        <View>
            <Text>New Room</Text>
        </View>
    )
}

export {Mood as MoodClass}



const styles = StyleSheet.create({

})