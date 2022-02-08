import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
import { BalanceCount } from "../redux/balanceSlice";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");
export default function AtmCard() {

  const state = useSelector(BalanceCount);

  const secureNumber = () => {
    return (
      <Text style={[styles.cardNumber]}>
        {!state.hidePin
          ? `1234${"   "}1234${"   "}1234${"   "}2345`
          : `✱✱✱✱${"   "}✱✱✱✱${"   "}✱✱✱✱${"   "}2345`}
      </Text>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style={styles.subTitle}>aspire</Text>
        </View>
        <View style={[styles.section2]}>
          <Text style={[styles.title]}>Mark Henry</Text>
        </View>

        <View style={styles.sectionMin}>{secureNumber()}</View>
        <View style={styles.sectionMin}>
          <Text style={[styles.cardDetail]}>
            Thru: 12/20{"   "} CVV: {!state.hidePin ? "233" : "✱ ✱ ✱"}
          </Text>
        </View>
        <View style={[styles.sectionMin, { justifyContent: "flex-end" }]}>
          <Image
            resizeMode="contain"
            style={styles.cardIcon}
            source={require("../assets/Visa.png")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width * 0.9,
    height: height / 4,
    backgroundColor: "#01D167",
    alignSelf: "center",
    marginTop: -height * 0.06,
    borderRadius: 15,
    padding: 18,
  },
  section1: {
    display: "flex",
    //width:width*0.9,
    height: height * 0.05,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    width: width * 0.12,
    height: width * 0.12,
  },
  section2: {
    display: "flex",
    height: height * 0.045,
    borderRadius: 15,
    flexDirection: "row",
  },
  sectionMin: {
    display: "flex",
    //width:width*0.9,
    height: height * 0.035,
    borderRadius: 15,
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  cardNumber: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },

  cardDetail: {
    fontSize: 14,
    color: "white",
  },
  subTitle: {
    fontSize: 15,
    textAlign: "right",

    color: "white",
  },
  cardIcon: {
    width: width * 0.15,
    height: width * 0.15,
  },
  showCard: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.44,
    height: width * 0.11,
    backgroundColor: "red",
    marginTop: -height * 0.1,
    alignSelf: "flex-end",
    marginRight: width * 0.05,
    marginBottom: -15,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: "center",
    paddingTop: 8,
  },
  eyeIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  eyeTxt: {
    fontSize: 15,
    textAlign: "right",
    color: "#01D167",
  },
});
