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



const Item = ({ navigation,title}) => (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <TouchableOpacity
            onPress={()=> moreDetails({navigation})}
            style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text >{title} </Text>
                    <Text >Yo</Text>
                </View>

            </View>


        </TouchableOpacity>
    </View>

);

let moreDetails = ({navigation}) => {
    navigation.navigate('Details')
}
let createRoom = ({navigation}) => {
    navigation.navigate('CreateRoom')
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


export const List = ({navigation,rooms})=> {

    const renderItem = ({ item }) => (
        <Item navigation={navigation} title={item[1].name} />
    );

    let  result = [];

    for(let i in rooms)
        result.push([i, rooms [i]]);

    console.log("result")
    console.log(result[0][1].name)

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

