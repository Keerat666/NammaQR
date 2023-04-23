import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RideStats = ({ rides, earnings }) => {
  return (

    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.value}>{rides}</Text>
        <Text style={styles.label}>Rides</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.value}>₹{earnings.toFixed(2)}</Text>
        <Text style={styles.label}>Earnings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#A4A4A4',
  },
});

export default RideStats;
