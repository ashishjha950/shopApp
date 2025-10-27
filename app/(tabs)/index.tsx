import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "@/components/Header";
import Home from "@/components/Home";

const Index = () => {

  return (
    <View style={styles.container}>

      {/* Header Section */}
      <Header/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Home/>        
      </ScrollView>

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    borderTopWidth: 0.5,
    borderTopColor: "#1e293b",
  },
});
