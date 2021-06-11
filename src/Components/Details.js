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