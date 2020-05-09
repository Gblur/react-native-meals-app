/** @format */

import React, { useState } from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  const [changeButton, setChangeButton] = useState("ios-star-outline");
  const [buttonState, setButtonState] = useState(false);

  const buttonChangeMethod = () => {
    if (buttonState === false) {
      setChangeButton("ios-star");
      setButtonState(true);
    } else if (buttonState === true) {
      setChangeButton("ios-star-outline");
      setButtonState(false);
    }
  };
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      iconName={changeButton}
      color="white"
      onPress={() => {
        buttonChangeMethod();
        console.log("change state pls");
      }}
    />
  );
};

export default CustomHeaderButton;