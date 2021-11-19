import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import products_data from "./src/products_data.json";
import ProductCard from "./src/components/ProductCard";

export default function App() {
  const renderProduct = ({ item }) => <ProductCard products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKA STORE</Text>
      <TextInput style={styles.searchBar} placeholder={"Ara"} />
      <FlatList
        data={products_data}
        renderItem={renderProduct}
        horizontal={false}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  header: {
    margin: 5,
    marginBottom: 0,
    padding: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "#8338ec",
  },
  searchBar: {
    marginTop: 0,
    margin: 5,
    backgroundColor: "#eceff1",
    color: "black",
    borderRadius: 10,
    padding: 5,
  },
});
