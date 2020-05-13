/** @format */

import React from "react";
import MealsList from "../components/MealsList";
import HeaderMenuButton from "../components/HeaderMenuButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const FavScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealsList listData={favMeals} />;
};

FavScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites",
    headerLeft: () => (
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
