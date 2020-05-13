/** @format */

import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList listData={displayedMeals} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCat = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectCat.title,
  };
};

export default CategoryMealScreen;
