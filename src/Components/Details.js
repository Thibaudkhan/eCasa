import React,{Component} from "react";

import {Text, TextInput, View, Button, TouchableOpacity} from "react-native";

class Details extends Component {

    state = {
        hexa:"#FFF",
        lumi: '200',
        url: 'http://'
    };

    async componentDidMount() {
        //console.log("insert to history")
        let {idMood,idRoom} = this.props.route.params

        console.log(this.props.route.params)
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

    updateDataForm = () => {
        try{
            fetch('http://10.0.2.2:3000/updateMood', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idMoon : this.props.route.params.idMood,
                    light_color :this.state.hexa,
                    light_power :this.state.lumi,
                    nameMood : this.props.route.params.name ,
                    playlist :this.state.url
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
                    onChangeText={text => this.setState({hexa: text})}
                    value={this.state.hexa}
                    placeholder="#FFF"
                />
                <Text>Inscire la luminosité voulue de 0 à 1024</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    onChangeText={text => this.setState({lumi: text})}
                    value={this.state.lumi}
                    placeholder="0-1024"
                />
                <Text>Inscrire l'url de de la playlist voulue</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    onChangeText={text => this.setState({url: text})}
                    value={this.state.url}
                    placeholder="0-1024"
                />
                <TouchableOpacity
                    onPress={()=> this.updateDataForm()}
                    >
                            <Text >Actualiser mood</Text>

                </TouchableOpacity>

            </View>
        )
    }
}
export default Details