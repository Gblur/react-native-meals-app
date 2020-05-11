/** @format */

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import HeaderMenuButton from "../components/HeaderMenuButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FilterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
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

export default FilterScreen;
