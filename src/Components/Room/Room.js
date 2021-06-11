import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SwipeSlider from "react-native-swipe-slider";

const Room = ({ navigation, route }) => {
  const [luminosity, setLuminosity] = useState(1);
  const { roomId } = route.params;

  const ambianceArray = [
    { name: "Ambiance 1", color: "rgb(148, 0, 255)" },
    { name: "Ambiance 2", color: "rgb(255,0,201)" },
    { name: "Ambiance 3", color: "rgb(0,94,255)" },
    { name: "Ambiance 4", color: "rgb(0, 94, 201)" },
    { name: "Ambiance 5", color: "rgb(253,209,0)" },
    { name: "Ambiance 6", color: "rgb(152,143,0)" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chambre n°{roomId}</Text>

      {ambianceArray.map((e, i) => (
        <TouchableOpacity
          onPress={() => console.log("changer la LED en " + e.color)}
          key={i}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 5,
          }}
        >
          <Text style={{ color: e.color }}>{e.name}</Text>
        </TouchableOpacity>
      ))}

      <Text style={{ marginTop: 20 }}>Modifier la luminosité :</Text>

      <SwipeSlider
        style={{ width: 300, height: 40, marginTop: 30 }}
        min={0}
        max={100}
        value={luminosity}
        onChange={(value) => setLuminosity(value)}
        backgroundColor={"#1B1725"}
        barColor={"#226CE0"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default Room;
