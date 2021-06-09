import React from 'react';
import {Text,Button,View,StyleSheet} from 'react-native';
import ViewNativeComponent from "react-native/Libraries/Components/View/ViewNativeComponent";


let  getDrugById =  async () => {
    const descriptionResponses = await fetch('http://10.0.2.2:3000/getDrugById', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then((responseJson) => {
            console.log( responseJson);
        })
        .catch((error) => {
            console.error(error);
        });


}

const Mood = () => {

    return(
        <View>
            <Text style={styles.container}> Coucou toi</Text>
            <Button
                onPress={getDrugById}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center'
    },
})

export  default  Mood;