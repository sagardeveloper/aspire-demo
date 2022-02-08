import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Modal,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { BalanceCount, changeAmount, changeModal } from "../redux/balanceSlice";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");
export default function BottomTab(props) {
  const [selectedAmount, setSelect] = useState("");
  const state = useSelector(BalanceCount);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(changeModal(false));
  }

  function selectAmount(amount) {
    setSelect(amount);
  }

  return (
    <Modal visible={state.showModal} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalSection1}>
          <View style={styles.header}>
            <TouchableOpacity onPress={closeModal}>
              <Image
                resizeMode="contain"
                style={[styles.back, { alignSelf: "flex-start" }]}
                source={require("../assets/back.png")}
              />
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require("../assets/Logo.png")}
            />
          </View>
          <Text
            style={styles.title}
            onPress={() => dispatch(changeAmount(5000))}
          >
            Spending limit
          </Text>
        </View>
        <View style={styles.modalSection2}>
          <View style={styles.modalHeader}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../assets/meter.png")}
            />
            <Text style={styles.modalTitle}>
              {"Set a weekly debit card spending limit"}
            </Text>
          </View>
          <View style={styles.dynamicAmount}>
            <View style={styles.dollerMain}>
              <Text style={styles.dollerStyle}>S$</Text>
            </View>
            <Text style={styles.selectedAmount}>{selectedAmount}</Text>
          </View>

          <View style={styles.partition} />
          <Text style={styles.modalText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <View style={styles.amountBlock}>
            <Text
              style={styles.amountOption}
              onPress={() => selectAmount(5000)}
            >
              S$ 5000
            </Text>
            <Text
              style={styles.amountOption}
              onPress={() => selectAmount(10000)}
            >
              S$ 10000
            </Text>
            <Text
              style={styles.amountOption}
              onPress={() => selectAmount(20000)}
            >
              S$ 20000
            </Text>
          </View>
          <TouchableOpacity
            onPress={selectAmount.length == 0 ? null : closeModal}
            style={[
              styles.savBtn,
              {
                backgroundColor:
                  selectedAmount.length == 0 ? "#EEEEEE" : "#20D167",
              },
            ]}
          >
            <Text style={styles.btnTxt}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "white",
    marginTop: height * 0.03,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#0C365A",
  },
  modalSection1: {
    flex: 0.2,
    padding: width * 0.1,
  },
  modalSection2: {
    flex: 0.8,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
});
