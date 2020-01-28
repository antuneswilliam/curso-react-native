import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./pages/main";
import Product from "./pages/product";

const AppNavigator = createStackNavigator(
  {
    JSHunt: {
      screen: Main,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#da552f"
        },
        headerTintColor: "#FFF"
      }
    },

    Product: {
      screen: Product,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#da552f"
        },
        headerTintColor: "#FFF"
      }
    }
  },
  {
    initialRouteName: "JSHunt"
  }
);

export default createAppContainer(AppNavigator);
