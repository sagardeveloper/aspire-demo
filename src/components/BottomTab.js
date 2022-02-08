import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("screen");
export default function BottomTab() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={require("../assets/Home.png")}
        />
        <Text style={styles.tabText}>Home</Text>
      </View>

      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={require("../assets/pay.png")}
        />
        <Text style={[styles.tabText, { color: "#01D167" }]}>Debit Card</Text>
      </View>

      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={require("../assets/Payments.png")}
        />
        <Text style={styles.tabText}>Payment</Text>
      </View>

      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={require("../assets/Credit.png")}
        />
        <Text style={styles.tabText}>Credit</Text>
      </View>

      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={require("../assets/Account.png")}
        />
        <Text style={styles.tabText}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width,
    height: height * 0.1,
    backgroundColor: "gray",
    alignSelf: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  section1: {
    flex: 0.2,
    height: height * 0.1,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    width: width * 0.07,
    height: width * 0.07,
    padding: 4,
  },
  tabText: {
    color: "#DDDDDD",
    fontSize: 12,
  },
});
