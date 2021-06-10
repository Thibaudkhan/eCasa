import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    ImageBackground,
    View,
    FlatList,
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


const list =   [
    [
        "0",
        {
            "id": 75,
            "name": "Room 1",
        },
    ],
    [
        "1",
        {
            "id": 76,
            "name": "Romm 2",
        },
    ],

]


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

let test = (idElement)=>{
    console.log("the id : ")
    console.log(idElement[1].name)
}

let moreDetails = ({navigation}) => {
    navigation.navigate('Details')
}




const RoomScreen = ({navigation}) => {


    return(
        <View style={styles.container}>
            <View>
                <Text>Mes Pièces</Text>
            </View>
        {list.map(element => (
        <View style={styles.container}>
            <View >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => moreDetails({navigation})}
                >
                    <Text>{element[1].name}</Text>
                </TouchableOpacity>
            </View>


        </View>
        ))}
    </View>

    );
}

function ShowDetailsScreen({route}) {

    return (
        <View>
            <Text>Detaiuls</Text>
        </View>
    )
}

// Drugscreen
const Room = ({ navigation }) => {
    console.log("DrugScreen 1")

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Room" >
                <Stack.Screen name="Room" component={RoomScreen} />
                <Stack.Screen name="Details" component={ShowDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 50
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    item:{
        height: 75,
        backgroundColor: "white",
        width: "90%",
        padding: 20,
        fontSize: 24,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom: 5
    },

    card:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    block_right:{

    },
    heightList:{
        height: 100,
    },
    roundButton:{
        width: 40,
        marginBottom: 15,
        marginLeft: 20
    }
});

export  default  Room;