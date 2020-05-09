/** @format */

import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        duration={itemData.item.duration}
        afford={itemData.item.affordability}
        complex={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCat = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectCat.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
  },
  backButton: {
    width: "80%",
    margin: 20,
  },
});

export default CategoryMealScreen;