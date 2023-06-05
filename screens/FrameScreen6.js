import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const FrameScreen6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Text style={styles.text}>9:41</Text>
          <Image
            style={styles.statusBarChild}
            resizeMode="cover"
            source={require("../assets/group-1351.png")}
          />
        </View>
      </View>
      <View style={[styles.skipParent, styles.buttonFlexBox]}>
        <Text style={styles.skip}>Skip</Text>
        <Image
          style={styles.arrowRightIcon}
          resizeMode="cover"
          source={require("../assets/arrowright2.png")}
        />
      </View>
      <Text style={styles.getQualityAnd}>{`Get quality and professional
service right to your 
doorsteps.`}</Text>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Frame5")}
      >
        <Text style={styles.button1}>Get Started</Text>
      </Pressable>
      <View style={styles.frameItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.colorGray80,
    textAlign: "center",
  },
  statusBarChild: {
    width: 67,
    height: 11,
    marginLeft: 265,
  },
  statusBar1: {
    justifyContent: "center",
    flexDirection: "row",
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
  skip: {
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    color: Color.black,
    textAlign: "center",
  },
  arrowRightIcon: {
    width: 17,
    height: 17,
    marginLeft: 2,
  },
  skipParent: {
    top: 848,
    left: 349,
    display: "none",
  },
  getQualityAnd: {
    top: 687,
    left: 37,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    height: "40.66%",
    width: "80.37%",
    top: "20.09%",
    right: "9.81%",
    bottom: "39.25%",
    left: "9.81%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image8Icon: {
    top: 52,
    left: 81,
    width: 277,
    height: 68,
    position: "absolute",
  },
  button1: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.lowfiWhite,
    textAlign: "center",
  },
  button: {
    top: 820,
    left: 35,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumorchid,
    width: 364,
    height: 60,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
  },
  frameItem: {
    width: 100,
    height: 100,
  },
  statusBarParent: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen6;
