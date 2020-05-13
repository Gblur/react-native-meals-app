/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, View } from "react-native";
import HeaderMenuButton from "../components/HeaderMenuButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Switch } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  //useCallback helps you to prevent infinite Loop
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
    };
    console.log(appliedFilters);
  }, [isGlutenFree]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <View style={styles.filterContainer}>
        <Text>GlutenFree</Text>
        <Switch
          thumbColor={"white"}
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderMenuButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

export default FilterScreen;
