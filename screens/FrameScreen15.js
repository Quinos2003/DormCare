import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const FrameScreen15 = () => {
  return (
    <View style={styles.statusBarParent}>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Text style={styles.text}>
            <Text style={styles.text1}>9:</Text>
            <Text style={styles.text2}>41</Text>
          </Text>
          <Image
            style={styles.statusBarChild}
            resizeMode="cover"
            source={require("../assets/group-1351.png")}
          />
        </View>
      </View>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/745-1.png")}
      />
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  text2: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorGray80,
    textAlign: "center",
  },
  statusBarChild: {
    width: 67,
    height: 11,
    marginLeft: 265,
  },
  statusBar1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  statusBar: {
    top: 0,
    left: 0,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_base,
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
  },
  icon: {
    top: 859,
    left: 86,
    width: 256,
    height: 32,
    position: "absolute",
  },
  image11Icon: {
    top: 140,
    left: 91,
    width: 246,
    height: 243,
    position: "absolute",
  },
  image12Icon: {
    top: 471,
    left: 13,
    width: 415,
    height: 88,
    position: "absolute",
  },
  statusBarParent: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen15;
