import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ products }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: products.imgURL }} />
      </View>
      <Text style={styles.desc}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      <Text style={{ color: products.inStock ? "green" : "red" }}>
        {products.inStock ? "" : "Stokta Yok"}
      </Text>
    </View>
  );
};

export default ProductCard;
