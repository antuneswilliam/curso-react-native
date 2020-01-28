import React from "react";
import { View, Text, WebView, StyleSheet } from "react-native";

export default function Product({ navigation }) {
  return (
    <View>
      <Text>{navigation.state.params.product.title}</Text>
      <Text>{navigation.state.params.product.url}</Text>
      <WebView source={{ uri: navigation.state.params.product.url }} />
    </View>
  );
}

// Product.navigationOptions = ({ navigation }) => ({
//   title: navigation.state.params.product.title
// });

// export default Product;
