import React from "react"
import {Text,Button,View,StyleSheet, TouchableOpacity} from 'react-native';

const Room = (props) => {
    return(
        <View style={styles.rooms}>
            <View style={styles.roomsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.roomsText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rooms:{},
    roomsLeft:{},
    roomsText:{},
    square:{}
})

export default Room;