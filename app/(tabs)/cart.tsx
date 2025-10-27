import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Huawei P60",
      image: "https://i.gadgets360cdn.com/products/large/Huawei-P60-db-709x800-1679579813.jpg",
      price: 750,
      quantity: 1,
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      image: "https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha",
      price: 1100,
      quantity: 2,
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvOzPMLPYFJgHPQfUUNj24HjmCAs6mt7r3A&s",
      price: 1200,
      quantity: 1,
    },
  ]);

  const updateQuantity = (index, type) => {
    const updatedItems = [...cartItems];
    if (type === "add") updatedItems[index].quantity++;
    else if (type === "minus" && updatedItems[index].quantity > 1)
      updatedItems[index].quantity--;
    setCartItems(updatedItems);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#111827" />
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item, index) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.imagePlaceholder}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(index, "minus")}
                >
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyCount}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(index, "add")}
                >
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Total Section */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>

        {/* Pay Now Button */}
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>PAY NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 12,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 16,
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  imagePlaceholder: {
    width: 70,
    height: 70,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemName: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 4,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    backgroundColor: "#f3f4f6",
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "bold",
  },
  qtyCount: {
    color: "#111827",
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalContainer: {
    backgroundColor: "#f9fafb",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  totalLabel: {
    color: "#6b7280",
    fontSize: 16,
  },
  totalValue: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
  },
  payButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#2563eb",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  payText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
