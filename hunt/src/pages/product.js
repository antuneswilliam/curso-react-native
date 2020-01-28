import React from "react";
import { View, Text, WebView, StyleSheet, Dimensions } from "react-native";

// React Native Web currently doesn't implement WebView.
// https://github.com/expo/expo/issues/5088#issuecomment-540221598

export default function Product({ navigation }) {
  return (
    <>
      <View>
        <Text>{navigation.state.params.product.title}</Text>
        <Text>{navigation.state.params.product.url}</Text>
      </View>
      <View style={{ height: 100, flexDirection: "column" }}>
        <WebView
          style={styles.webview}
          source={{ uri: navigation.state.params.product.url }}
        />
      </View>
    </>
  );
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: "yellow",
    width: deviceWidth,
    height: deviceHeight
  }
});

// Product.navigationOptions = ({ navigation }) => ({
//   title: navigation.state.params.product.title
// });

// export default Product;
