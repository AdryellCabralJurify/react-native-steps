import React from "react";
import { View } from "react-native";

const ProgressButtons = props => (
  <View style={{ flexDirection: "row", marginTop: 50 }}>
    <View style={{ position: "absolute", left: 30, bottom: 20 }}>
      {props.renderPreviousButton()}
    </View>
    <View style={{ position: "absolute", right: 30, bottom: 20 }}>
      {props.renderNextButton()}
    </View>
  </View>
);

export default ProgressButtons;
