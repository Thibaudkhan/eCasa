import "react-native-gesture-handler";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import RoomList from "../RoomList/RoomList";

const Home = ({ navigation }) => {
  const getDrugById = async () => {
    const descriptionResponses = await fetch(
      "http://10.0.2.2:3000/getDrugById",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const roomArray = [{ name: "Chambre 1" }, { name: "Chambre 2" }, { name: "Toutes les chambres" }];

  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>Maison</Text>

        <View style={styles.rooms}>
          {roomArray.map((e, i) => (
            <View key={i} style={{marginTop: 20}}>
              <RoomList navigation={navigation} text={e.name} roomId={i + 1} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
    textAlign: "center"
  },
  home: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"

  },
  rooms: {},
});

export default Home;
