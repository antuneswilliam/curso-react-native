import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import api from "../services/api";

// export default class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>Home Screen</Text>
//             </View>
//         );
//     }
// }

export default function Main(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts(pageNum = 1) {
    const response = await api.get(`/products?page=${pageNum}`);
    const { docs, ...productInfo } = response.data;

    //setProducts(docs);

    setProducts([...products, ...docs]);

    setProductInfo(productInfo);

    setPage(pageNum);
  }

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.productButton}
        onPress={() => props.navigation.navigate("Product", { product: item })}
      >
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  function loadMore() {
    if (page === productInfo.pages) return;

    const pageNum = page + 1;
    loadProducts(pageNum);
  }

  return (
    <View style={styles.container}>
      <Text>Page: {page}</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  list: {
    padding: 20
  },

  productContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#da552f",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  productButtonText: {
    fontSize: 16,
    color: "#da552f",
    fontWeight: "bold"
  }
});
