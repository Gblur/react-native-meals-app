/** @format */

import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridTile} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  ); 
};

const styles = StyleSheet.create({
  gridTile: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
});

export default CategoryGridTile;
