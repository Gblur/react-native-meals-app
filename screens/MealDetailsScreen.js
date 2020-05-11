/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <View>
        <View>
          <Text>INGREDIENTS</Text>
          <View style={styles.ingredients}>
            {selectedMeal.ingredients.map((ingredient) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
          </View>
        </View>
        <Button
          title={"Back to Categories"}
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </View>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item key={0} title="Favourite" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredients: {},
});

export default MealDetailsScreen;
