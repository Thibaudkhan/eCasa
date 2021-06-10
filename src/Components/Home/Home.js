import React from 'react';
import {Text,Button,View,StyleSheet} from 'react-native';
import ViewNativeComponent from "react-native/Libraries/Components/View/ViewNativeComponent";
import Room from '../Room/Room';


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

const Home = () => {

    return(
        <View style={styles.container}>
            <View style={styles.home}>
                <Text style={styles.title}>Maison</Text>

                <View style={styles.rooms}>
                <Room text={'Chambre 1'}/>
                <Room text={'Chambre 2'}/>
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    home: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    rooms: {}
});

export default Home;