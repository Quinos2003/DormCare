import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const FrameScreen4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          <Image
            style={styles.statusBarChild}
            resizeMode="cover"
            source={require("../assets/group-1351.png")}
          />
        </View>
      </View>
      <Image
        style={styles.arrowRightIcon}
        resizeMode="cover"
        source={require("../assets/arrowright.png")}
      />
      <Text style={styles.loginToYour}>{`Login to your
Account`}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame10656")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.signIn, styles.labelTypo1]}>Sign in</Text>
      </Pressable>
      <View style={styles.rememberMeParent}>
        <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
          Remember Me
        </Text>
        <View style={styles.groupItem} />
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.rememberMeTypo]}>
        <Text style={styles.dontHaveAnAccount}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={[styles.signUp, styles.labelTypo1]}>Sign up</Text>
      </Text>
      <View style={styles.lineParent}>
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Text style={styles.or}>or</Text>
      </View>
      <View style={styles.singleLineInput}>
        <Text style={[styles.label, styles.labelTypo]}>Email Address</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIconLayout}
            resizeMode="cover"
            source={require("../assets/-left-icon6.png")}
          />
          <Text style={[styles.inputLabel, styles.inputTypo]}>
            Input email address
          </Text>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon1.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon4.png")}
          />
          <Text style={styles.weAllWanna}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={styles.singleLineInput1}>
        <Text style={[styles.label, styles.labelTypo]}>Password</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIconLayout}
            resizeMode="cover"
            source={require("../assets/-left-icon7.png")}
          />
          <Text style={[styles.inputLabel1, styles.inputTypo]}>
            <Text style={styles.i}>I</Text>
            <Text style={styles.labelTypo1}>nput password</Text>
          </Text>
          <Image
            style={[styles.leftIcon4, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon8.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon4.png")}
          />
          <Text style={styles.weAllWanna}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <Image
        style={[styles.frameChild, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/group-83.png")}
      />
      <Image
        style={[styles.frameItem, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/group-82.png")}
      />
      <Text style={[styles.forgotPassword, styles.labelTypo]}>
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 58,
    width: 364,
    position: "absolute",
  },
  labelTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  rememberMeTypo: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 164,
    borderTopWidth: 1,
    borderColor: "#222",
    backgroundColor: Color.colorGray70,
    top: 12,
    borderStyle: "solid",
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    textAlign: "left",
    color: Color.colorGray80,
  },
  fieldSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  inputTypo: {
    width: 289,
    marginLeft: 8,
    color: Color.colorGray60,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    textAlign: "left",
  },
  leftIconLayout: {
    height: 18,
    width: 18,
  },
  framePosition: {
    top: 761,
    position: "absolute",
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
  statusBar1: {
    justifyContent: "center",
    flexDirection: "row",
  },
  statusBar: {
    paddingHorizontal: Padding.p_15xl,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_base,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
  },
  arrowRightIcon: {
    top: 79,
    left: 26,
    width: 25,
    height: 25,
    position: "absolute",
  },
  loginToYour: {
    top: 171,
    fontSize: 43,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    textAlign: "left",
    left: 34,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.mediumorchid,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  signIn: {
    top: 17,
    left: 144,
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.lowfiWhite,
    width: 75,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 589,
    left: 34,
  },
  rememberMe: {
    fontFamily: FontFamily.montserratRegular,
    left: 34,
    color: Color.colorGray80,
    top: 0,
  },
  groupItem: {
    top: 2,
    borderColor: "#9453c5",
    borderWidth: 2,
    width: 20,
    height: 20,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rememberMeParent: {
    top: 526,
    width: 155,
    height: 22,
    left: 34,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.darkslategray_100,
  },
  text1: {
    color: Color.colorGray80,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.montserratRegular,
  },
  signUp: {
    color: Color.mediumorchid,
  },
  dontHaveAnContainer: {
    top: 856,
    left: 81,
  },
  groupInner: {
    left: 0,
  },
  lineView: {
    left: 201,
  },
  or: {
    left: 174,
    lineHeight: 24,
    color: Color.colorGray70,
    width: 19,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    height: 24,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    top: 706,
    height: 24,
    width: 364,
    left: 34,
    position: "absolute",
  },
  label: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: 364,
  },
  inputLabel: {
    marginLeft: 8,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  leftIcon1: {
    display: "none",
    marginLeft: 8,
  },
  field: {
    borderRadius: Border.br_5xs,
    borderColor: "#464646",
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    borderStyle: "solid",
    width: 364,
    paddingVertical: Padding.p_base,
  },
  leftIcon2: {
    width: 13,
    height: 13,
  },
  weAllWanna: {
    fontSize: FontSize.size_xs,
    marginLeft: 8,
    color: Color.colorGray60,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    textAlign: "left",
  },
  leftIconParent: {
    display: "none",
  },
  singleLineInput: {
    top: 314,
    left: 35,
    position: "absolute",
  },
  i: {
    fontFamily: FontFamily.typographyTaglineSmallMedium,
    fontWeight: "500",
  },
  inputLabel1: {
    marginLeft: 8,
  },
  leftIcon4: {
    marginLeft: 8,
  },
  singleLineInput1: {
    top: 422,
    left: 34,
    position: "absolute",
  },
  frameChild: {
    left: 249,
    width: 123,
    height: 89,
  },
  frameItem: {
    left: 58,
    width: 125,
    height: 90,
  },
  forgotPassword: {
    top: 668,
    left: 158,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
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

export default FrameScreen4;
