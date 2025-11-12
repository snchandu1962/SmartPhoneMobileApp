import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductsScreen = () => {
  const [products] = useState([
    {
      id: '1',
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 999,
      rating: 4.8,
      image: '📱',
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24',
      brand: 'Samsung',
      price: 899,
      rating: 4.7,
      image: '📱',
    },
    {
      id: '3',
      name: 'Google Pixel 8',
      brand: 'Google',
      price: 699,
      rating: 4.6,
      image: '📱',
    },
    {
      id: '4',
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 799,
      rating: 4.5,
      image: '📱',
    },
    {
      id: '5',
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      price: 649,
      rating: 4.4,
      image: '📱',
    },
    {
      id: '6',
      name: 'Sony Xperia 1 V',
      brand: 'Sony',
      price: 1099,
      rating: 4.3,
      image: '📱',
    },
  ]);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Smartphones</Text>
        <Text style={styles.subHeaderText}>{products.length} products</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  listContainer: {
    padding: 15,
  },
});

export default ProductsScreen;
