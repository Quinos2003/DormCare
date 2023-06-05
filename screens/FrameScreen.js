import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const FrameScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={styles.statusBar}>
        <View style={styles.buttonFlexBox}>
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
      <Text style={[styles.yourComplaintWas, styles.complaintTypo]}>
        Your complaint was successfully sent
      </Text>
      <Text style={[styles.complaintSent, styles.complaintTypo]}>
        Complaint Sent!
      </Text>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Frame10656")}
      >
        <Text style={styles.button1}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  complaintTypo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    color: Color.colorGray80,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
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
    textAlign: "center",
    color: Color.colorGray80,
  },
  statusBarChild: {
    width: 67,
    height: 11,
    marginLeft: 265,
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
  yourComplaintWas: {
    top: 405,
    left: 53,
    lineHeight: 24,
    width: 326,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
  },
  complaintSent: {
    top: 358,
    left: 111,
    fontSize: FontSize.size_7xl,
  },
  button1: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.lowfiWhite,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    textAlign: "center",
  },
  button: {
    top: 507,
    left: 34,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumorchid,
    width: 364,
    height: 60,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
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

export default FrameScreen;
