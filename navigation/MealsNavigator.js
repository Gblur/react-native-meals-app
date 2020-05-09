/** @format */

import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createAppContainer } from "react-navigation";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "grey",
      },
    },
  }
);

export default createAppContainer(MealsNavigator);
