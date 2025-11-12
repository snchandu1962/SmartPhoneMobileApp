import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to SmartPhone App</Text>
        <Text style={styles.subtitle}>Your one-stop shop for smartphones</Text>
      </View>

      <View style={styles.featuresContainer}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('Products')}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📱</Text>
          </View>
          <Text style={styles.featureTitle}>Browse Products</Text>
          <Text style={styles.featureDescription}>
            Explore our wide range of smartphones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('Profile')}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👤</Text>
          </View>
          <Text style={styles.featureTitle}>My Profile</Text>
          <Text style={styles.featureDescription}>
            View and manage your account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Why Choose Us?</Text>
        <View style={styles.infoItem}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.infoText}>Latest smartphone models</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.infoText}>Competitive prices</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.infoText}>Fast and secure delivery</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.infoText}>24/7 customer support</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  featuresContainer: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 50,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 18,
    color: '#4CAF50',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;
