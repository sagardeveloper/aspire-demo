import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import AtmCard from "../components/AtmCard";
import BottomTab from "../components/BottomTab";
import MenuList from "../components/MenuList";
import Modal from "../components/AmountModal";
import { BalanceCount, changeAmount, setPin } from "../redux/balanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { home_list } from "../config/constant";

const { width, height } = Dimensions.get("screen");
export default function Timer() {
  const balance = useSelector(BalanceCount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
          <View style={styles.section1}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require("../assets/Logo.png")}
            />
            <Text
              style={styles.title}
              onPress={() => dispatch(changeAmount(5000))}
            >
              Debit Card
            </Text>
            <Text style={styles.subTitle}>Available balance</Text>

            <View style={styles.balance}>
              <View style={styles.dollerMain}>
                <Text style={styles.dollerStyle}>S$</Text>
              </View>

              <Text style={[styles.title, { marginLeft: 10 }]}>
                {balance.value}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.showCard}
              hitSlop={{ bottom: 500 }}
              onPress={() => dispatch(setPin(!balance.hidePin))}
            >
              <Image
                resizeMode="contain"
                style={styles.eyeIcon}
                source={require("../assets/eye.png")}
              />
              <Text style={[styles.eyeTxt]}>Show card number</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section2}>
            <AtmCard />

            {balance.setLimit ? (
              <View>
                <View style={styles.activeView}>
                  <Text style={styles.limitTxt}>Available balance</Text>
                  <View style={styles.activeView}>
                    <Text style={styles.minAmount}>$345</Text>
                    <View style={styles.devider} />
                    <Text style={styles.maxAmount}>$5000</Text>
                  </View>
                </View>
                <View
                  style={styles.progressBar}
                  progressTintColor="green"
                  progress={1}
                />
              </View>
            ) : null}
            {home_list.map((item, index) => {
              return (
                <View key={index}>
                  <MenuList data={item} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomTab />
      {<Modal />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C365A",
  },
  scroller: {
    display: "flex",
  },
  section1: {
    height: height / 2.7,
    backgroundColor: "transparent",
    padding: width * 0.08,
  },
  section2: {
    flex: 0.6,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  logo: {
    width: width * 0.1,
    height: width * 0.1,
    alignSelf: "flex-end",
  },
  back: {
    width: width * 0.05,
    height: width * 0.05,
    alignSelf: "flex-end",
    marginVertical: 20,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "white",
  },
  subTitle: {
    fontSize: 14,
    color: "white",
    paddingTop: height * 0.035,
    paddingBottom: 10,
  },
  dollerMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.06,
    width: width * 0.1,
    backgroundColor: "#01D167",
    borderRadius: 5,
  },

  balance: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dollerStyle: {
    fontSize: 14,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#0C365A",
  },
  modalSection1: {
    flex: 0.3,
    padding: width * 0.1,
  },
  modalSection2: {
    flex: 0.7,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: width * 0.06,
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: width * 0.07,
    height: width * 0.07,
    marginRight: 20,
    marginVertical: 20,
  },
  partition: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  },
  modalTitle: {
    fontSize: 15,
    color: "#222222",
  },
  modalText: {
    fontSize: 14,
    color: "#22222266",
  },
  amountBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: height * 0.04,
  },
  amountOption: {
    backgroundColor: "rgba(32, 209, 103, 0.1)",
    paddingVertical: height * 0.02,
    width: width * 0.27,
    borderRadius: 5,
    overflow: "hidden",
    color: "#01D167",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  selectedAmount: {
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 12,
  },
  dynamicAmount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  savBtn: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: height * 0.25,
    backgroundColor: "#EEEEEE",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height * 0.05,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  activeView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: width * 0.06,
    alignItems: "center",
    marginBottom: 10,
  },
  limitTxt: {
    fontSize: 14,
  },
  minAmount: {
    color: "#01D167",
    fontWeight: "bold",
    fontSize: 16,
  },
  devider: {
    height: 20,
    width: 2,
    backgroundColor: "#22222233",
    marginHorizontal: 5,
  },
  maxAmount: {
    color: "#22222233",
    fontWeight: "bold",
    fontSize: 16,
  },
  progressBar: {
    height: 15,
    width: width * 0.85,
    alignSelf: "center",
    backgroundColor: "green",
    marginHorizontal: 8,
    borderRadius: 20,
  },
  showCard: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.44,
    height: width * 0.11,
    backgroundColor: "white",
    marginTop: Platform.OS == "ios" ? height * 0.045 : height * 0.02,
    alignSelf: "flex-end",
    marginRight: -width * 0.03,
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
