import * as React from 'react';
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



const Item = ({ navigation,typeOfRoute,title,idItem,idRoom,idMood}) => (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <TouchableOpacity
            onPress={()=> selectRoute({navigation,typeOfRoute,idRoom,idItem})}
            style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text >{title} </Text>
                    <Text >{idItem}</Text>
                </View>

            </View>


        </TouchableOpacity>
    </View>

);

let selectRoute = ({navigation,typeOfRoute,idRoom,idItem})=>{
    console.log("item"+ idItem + " route "+ typeOfRoute)
    if(typeOfRoute == 'Mood'){
        idRoom = idItem
    }

    navigation.navigate(typeOfRoute,{
        idRoom: idRoom,
        idMood : idItem
    })
    idRoom = idItem;

}



let ButtonAdd = ({navigation})=>{
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text>Ajouter Chambre</Text>
        </TouchableOpacity>
    )
}


export const List = ({navigation,rooms,typeOfRoute,idRoom,idMood})=> {

    const renderItem = ({ item }) => (
        <Item navigation={navigation} typeOfRoute={typeOfRoute} title={item[1].name} idItem={item[0]} idRoom={idRoom} idMood={idMood} />
    );

    let  result = [];

    for(let i in rooms)
        result.push([i, rooms [i]]);

    console.log("result")
    console.log(result[0])

    return (
        <View style={{ flex: 1, paddingTop: 30, backgroundColor: "#dff2ff" }}>

            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 30, textAlign: "center" }}>Liste des pièces de la maison</Text>
            </SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <FlatList
                    data={result}
                    renderItem={renderItem}

                    keyExtractor={item => item.id}
                />

            </ScrollView>
            <ButtonAdd navigation={navigation}/>
            <SafeAreaView style={styles.heightList}>

            </SafeAreaView>

        </View>
    );



}

const styles = StyleSheet.create({
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
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

