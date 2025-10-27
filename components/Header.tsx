import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      {/* Top Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="arrow-back" size={24} color="#111827" />
        <Text style={styles.title}>Phones</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#6b7280" />
        <TextInput
          placeholder="Search phones, brands..."
          placeholderTextColor="#9ca3af"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 12,
  },
  searchBar: {
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 44,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    color: '#111827',
    marginLeft: 8,
    fontSize: 14,
  },
});
