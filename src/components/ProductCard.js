import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProductCard = ({product}) => {
  const renderStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }

    return stars.join('');
  };

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Text style={styles.image}>{product.image}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>{renderStars(product.rating)}</Text>
          <Text style={styles.rating}>{product.rating}</Text>
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    fontSize: 80,
  },
  content: {
    padding: 15,
  },
  brand: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    fontSize: 14,
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductCard;
