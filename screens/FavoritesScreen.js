/** @format */

import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import HeaderMenuButton from "../components/HeaderMenuButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealsList listData={favMeals} />;
};

FavScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderMenuButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavScreen;
