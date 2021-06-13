import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const RoomList = (props) => {
  return (
    <View style={styles.rooms}>
      <View style={styles.roomsLeft}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Room", {
              roomId: props.roomId,
            })
          }
          style={styles.square}
        >
          <Text style={styles.roomsText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rooms: {},
  roomsLeft: {marginTop: 50},
  roomsText: { textAlign: "center", backgroundColor: "blue", paddingHorizontal: 20, color: "white", paddingVertical: 10 },
  square: {},
});

export default RoomList;
