import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = () => {
  const brands = [
    { name: 'Apple', image: 'https://fabrikbrands.com/wp-content/uploads/Apple-Logo-History-1-1155x770.png' },
    { name: 'Huawei', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6V9Q5KCv2x-L1YrxnVDUwoEOykp35L4MTQ&s' },
    { name: 'Samsung', image: 'https://i.pinimg.com/736x/95/f7/f6/95f7f6ea3bd90de8cb3e5bedcb4e1b15.jpg' },
    { name: 'Nokia', image: 'https://cdn.wallpapersafari.com/61/77/rmb5aB.jpg' },
    { name: 'One Plus', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_entreprise_OnePlus.png' },
    { name: 'Vivo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotV2QgOFVYi3-6KE02eVVesLjOEcT5jtmHw&s' },
  ];

  const products = [
    { name: 'iPhone 15', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvOzPMLPYFJgHPQfUUNj24HjmCAs6mt7r3A&s' },
    { name: 'Galaxy S24', image: 'https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha' },
    { name: 'Huawei P60', image: 'https://i.gadgets360cdn.com/products/large/Huawei-P60-db-709x800-1679579813.jpg' },
    { name: 'Nokia X30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyin-eKA70bya3ctlTx9LMDjVLoRFsi-5Ig&s' },
  ];

  const othersBuy = [
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315935',
    'https://cdn.mos.cms.futurecdn.net/TXRyXNc3FuchdgTMqrwux4-1200-80.jpg',
    'https://media.wired.com/photos/59267269cefba457b079a024/4:3/w_929,h_697,c_limit/Nokia_FI.jpg'
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Brands Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionTitle}>Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.brandsRow}>
          {brands.map((brand, index) => (
            <View key={index} style={styles.brandItem}>
              <Image source={{ uri: brand.image }} style={styles.brandCircle} resizeMode="contain" />
              <Text style={styles.brandName}>{brand.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Product Grid */}
      <View style={styles.gridContainer}>
        {products.map((product, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.productName}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Others Buy Section */}
      <Text style={styles.sectionTitle}>Others buy</Text>
      <View style={styles.smallGrid}>
        {othersBuy.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.smallCard} resizeMode="contain" />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb', // light background
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  brandsRow: {
    flexDirection: 'row',
  },
  brandItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  brandCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#f3f4f6',
    borderRadius: 30,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  brandName: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    color: '#111827',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  smallGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  smallCard: {
    width: '30%',
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
