import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const FrameScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
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
      <View style={[styles.clientNavigation, styles.statusBarPosition]}>
        <View style={[styles.navigationhome, styles.buttonFlexBox]}>
          <Pressable
            style={styles.homeParent}
            onPress={() => navigation.navigate("Frame10656")}
          >
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
          </Pressable>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/repeatemusic.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.myKwafts, styles.homeSpaceBlock]}>
              My Kwafts
            </Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/messagetext.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.myKwafts, styles.homeSpaceBlock]}>Chat</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.myKwafts, styles.homeSpaceBlock]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.arrowLeftParent, styles.buttonPosition]}
        onPress={() => navigation.navigate("Frame10656")}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Text style={[styles.report, styles.inputTypo]}>Report</Text>
      <View style={[styles.singleLineInput, styles.buttonPosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Name</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIconLayout}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputClr]}>Input name</Text>
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
            source={require("../assets/-left-icon2.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={[styles.singleLineInput1, styles.linePosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Subject</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIconLayout}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputClr]}>
            Input subject
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
            source={require("../assets/-left-icon2.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={[styles.multipleLineInput, styles.linePosition]}>
        <Text style={[styles.label2, styles.labelTypo]}>Description</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Text style={[styles.inputLabel2, styles.inputClr]}>
            Input description
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.fieldLayout]}
        onPress={() => navigation.navigate("Frame10665")}
      >
        <Text style={[styles.button1, styles.inputTypo]}>{`Submit `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  homeSpaceBlock: {
    marginTop: 4,
    width: 73,
  },
  buttonPosition: {
    left: 32,
    position: "absolute",
  },
  inputTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  labelTypo: {
    width: 364,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
  },
  fieldSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  inputClr: {
    color: Color.colorGray60,
    textAlign: "left",
  },
  leftIconLayout: {
    height: 18,
    width: 18,
    display: "none",
  },
  linePosition: {
    left: 34,
    position: "absolute",
  },
  fieldLayout: {
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    width: 364,
    alignItems: "center",
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
    paddingHorizontal: Padding.p_15xl,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  frameChild: {
    backgroundColor: Color.gainsboro,
    height: 0,
  },
  home: {
    color: Color.mediumorchid,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    textAlign: "center",
  },
  homeParent: {
    alignItems: "center",
  },
  myKwafts: {
    display: "none",
    color: Color.colorGray70,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    textAlign: "center",
  },
  repeateMusicParent: {
    marginLeft: 28,
    alignItems: "center",
  },
  navigationhome: {
    width: 428,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  clientNavigation: {
    top: 846,
    flexDirection: "row",
  },
  arrowLeftIcon: {
    width: 17,
    height: 17,
  },
  back: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
    color: Color.colorGray70,
    textAlign: "center",
  },
  arrowLeftParent: {
    top: 86,
    alignItems: "center",
    flexDirection: "row",
  },
  report: {
    top: 135,
    left: 184,
    fontSize: FontSize.size_lg,
    color: Color.colorGray90,
    textAlign: "center",
    position: "absolute",
    fontWeight: "500",
  },
  label: {
    color: Color.colorGray80,
  },
  inputLabel: {
    width: 289,
    marginLeft: 8,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
  },
  leftIcon1: {
    marginLeft: 8,
  },
  field: {
    borderStyle: "solid",
    borderColor: "#464646",
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    width: 364,
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  leftIcon2: {
    width: 13,
    height: 13,
  },
  weAllWanna: {
    fontSize: FontSize.size_xs,
    marginLeft: 8,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
  },
  leftIconParent: {
    display: "none",
  },
  singleLineInput: {
    top: 189,
  },
  singleLineInput1: {
    top: 303,
  },
  label2: {
    color: Color.colorGray70,
  },
  inputLabel2: {
    width: 345,
    height: 82,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
  },
  multipleLineInput: {
    top: 407,
  },
  button1: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    color: Color.lowfiWhite,
    textAlign: "center",
  },
  button: {
    top: 606,
    backgroundColor: Color.mediumorchid,
    height: 60,
    paddingVertical: Padding.p_xl,
    left: 32,
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
  },
  statusBarParent: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen1;
