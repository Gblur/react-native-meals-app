/** @format */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <TouchableOpacity style={styles.Meal} onPress={props.onSelectMeal}>
      <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
        <ImageBackground source={{ uri: props.image }} style={styles.image}>
          <Text style={styles.title}>{props.title}</Text>
        </ImageBackground>
      </View>
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{props.duration} min</Text>
        <Text>{props.afford.toUpperCase()} </Text>
        <Text>{props.complex.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Meal: {
    height: 300,
    backgroundColor: "rgb(220,220,220)",
    flexGrow: 1,
    marginBottom: 10,
    alignContent: "space-between",
    borderRadius: 4,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});

export default MealItem;
