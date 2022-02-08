import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { changeModal, viewLimit } from "../redux/balanceSlice";
import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get("screen");
export default function MenuList(props) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    if (data.title === "Weekly spending limit" && !toggle) {
      dispatch(changeModal(true));
      dispatch(viewLimit(true));
    } else if (data.title === "Weekly spending limit" && toggle) {
      dispatch(viewLimit(false));
    }
    setToggle(!toggle);
  };

  let data = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Image
          resizeMode="contain"
          style={styles.tabIcon}
          source={data.image}
        />
      </View>
      <View style={styles.section2}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subTitle}>{data.subTitle}</Text>
      </View>
      <View style={styles.section3}>
        {data.showToggle ? (
          <TouchableOpacity onPress={toggleChange}>
            {!toggle ? (
              <Image
                resizeMode="contain"
                style={styles.tabIcon}
                source={require(`../assets/toggleOff.png`)}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={styles.tabIcon}
                source={require(`../assets/toggleOn.png`)}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width * 0.9,
    height: height / 9,
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  section1: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    flex: 0.6,
    justifyContent: "center",
    paddingLeft: 5,
  },
  section3: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    width: width * 0.12,
    height: width * 0.12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 13,
    color: "rgba(34, 34, 34, 0.4)",
  },
});
