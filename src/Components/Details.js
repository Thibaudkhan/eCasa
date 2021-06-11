import React,{Component} from "react";

import {Text, TextInput, View} from "react-native";

class Details extends Component {

    state = {
        detailsData: [
            {
                name: "cozy",
                id: 'cozy',
            }
        ]
    };

    async componentDidMount() {
        console.log("insert to history")
        let {idMood,idRoom} = this.props.route.params

        console.log(idMood+"/// "+idRoom)
        await this.insertToHistory(idRoom.toString(),idMood.toString())

    }

    insertToHistory = async (idRoom,idMood) => {
        try{
            await fetch('http://10.0.2.2:3000/updateRoom', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idRoom: idRoom,
                    idMood: idMood
                }),
            });
        }catch (e){
            console.warn("Cannot insert to history")
        }

    }

    render () {
        return (
            <View>
                <Text>Inscire le code hexa pour la couleur voulue</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    onChangeText={text => this.setState({detailsData: text})}
                    value={this.detailsData}
                    placeholder="Insert your text!"
                />
            </View>
        )
    }
}
export default Details