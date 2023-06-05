import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FrameScreen7 = () => {
  const navigation = useNavigation();

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
      <View style={[styles.groupParent, styles.groupLayout2]}>
        <View style={[styles.groupContainer, styles.groupParentLayout]}>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-32.png")}
            />
          </View>
          <Text style={[styles.rememberMe, styles.rememberMeFlexBox]}>
            Remember me
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-321.png")}
            />
          </View>
          <Text style={[styles.rememberMe, styles.rememberMeFlexBox]}>
            Face ID
          </Text>
        </View>
        <View style={[styles.groupParent1, styles.groupParentLayout]}>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-322.png")}
            />
          </View>
          <Text
            style={[styles.twoFactorAuthentication, styles.rememberMeFlexBox]}
          >
            Two Factor Authentication
          </Text>
        </View>
        <View style={[styles.groupParent2, styles.groupParentLayout]}>
          <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-323.png")}
            />
          </View>
          <Text style={[styles.rememberMe, styles.rememberMeFlexBox]}>
            Biometric ID
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.arrowRightParent}
        onPress={() => navigation.navigate("Frame10646")}
      >
        <Image
          style={styles.arrowRightIcon}
          resizeMode="cover"
          source={require("../assets/arrowright.png")}
        />
        <Text style={[styles.editProfile, styles.rememberMeTypo]}>
          Edit Profile
        </Text>
      </Pressable>
      <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
        <View style={[styles.groupChild4, styles.groupChild4Layout]} />
        <Text style={[styles.changePassword, styles.rememberMeFlexBox]}>
          Change Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout2: {
    width: 384,
    left: 0,
  },
  groupParentLayout: {
    height: 54,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 31,
    width: 46,
    top: 11,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: 13,
    height: 31,
    width: 46,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 26,
    width: 21,
    top: 3,
    position: "absolute",
  },
  rememberMeFlexBox: {
    alignItems: "center",
    display: "flex",
    fontSize: 17,
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
  },
  rememberMeTypo: {
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 0,
  },
  groupChild4Layout: {
    height: 55,
    width: 346,
    position: "absolute",
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
    lineHeight: 20,
    color: Color.colorGray80,
    textAlign: "center",
    letterSpacing: 0,
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
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_base,
    justifyContent: "flex-end",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
  },
  groupChild: {
    backgroundColor: Color.mediumorchid,
  },
  groupItem: {
    left: 22,
  },
  rectangleParent: {
    left: 306,
  },
  rememberMe: {
    width: 145,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 0,
    lineHeight: 41,
    display: "flex",
    fontSize: 17,
    height: 54,
    letterSpacing: 0,
    left: 0,
  },
  groupContainer: {
    width: 352,
    left: 32,
    height: 54,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.gainsboro,
  },
  ellipseIcon: {
    left: 2,
  },
  rectangleGroup: {
    left: 338,
  },
  groupView: {
    top: 55,
    width: 384,
    left: 0,
  },
  twoFactorAuthentication: {
    width: 243,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 0,
    lineHeight: 41,
    display: "flex",
    fontSize: 17,
    height: 54,
    letterSpacing: 0,
    left: 0,
  },
  groupParent1: {
    top: 162,
    width: 352,
    left: 32,
    height: 54,
  },
  rectangleParent1: {
    left: 314,
  },
  groupParent2: {
    top: 108,
    left: 24,
    width: 360,
  },
  groupParent: {
    top: 136,
    height: 216,
    position: "absolute",
  },
  arrowRightIcon: {
    top: 2,
    width: 25,
    height: 25,
    left: 0,
    position: "absolute",
  },
  editProfile: {
    left: 36,
    fontSize: FontSize.size_3xl_5,
    letterSpacing: -1,
    lineHeight: 30,
    textAlign: "center",
    position: "absolute",
  },
  arrowRightParent: {
    top: 75,
    left: 34,
    width: 157,
    height: 30,
    position: "absolute",
  },
  groupChild4: {
    borderRadius: Border.br_8xl_5,
    backgroundColor: Color.thistle,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10.431035041809082,
    },
    shadowRadius: 18.97,
    elevation: 18.97,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  changePassword: {
    top: 17,
    left: 80,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.mediumorchid,
    width: 186,
    display: "flex",
    fontSize: 17,
  },
  rectangleParent2: {
    top: 408,
    left: 41,
  },
  statusBarParent: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen7;
