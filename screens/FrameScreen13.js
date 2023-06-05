import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const FrameScreen13 = () => {
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
      <View style={[styles.arrowLeftParent, styles.singlePosition]}>
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.booking, styles.inputTypo]}>Booking</Text>
      <View style={styles.singleLineInput}>
        <Text style={[styles.label, styles.labelTypo]}>Date</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputClr]}>Select date</Text>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon11.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon12.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={[styles.singleLineInput1, styles.singlePosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Time</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputClr]}>Select time</Text>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon13.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon12.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={[styles.singleLineInput2, styles.singlePosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Address</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel2, styles.inputClr]}>
            Block-Room Number
          </Text>
          <Image
            style={[styles.leftIcon7, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon1.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon12.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </View>
      <View style={[styles.multipleLineInput, styles.singlePosition]}>
        <Text style={[styles.label3, styles.labelTypo]}>Brief Description</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Text style={[styles.inputLabel3, styles.inputClr]}>
            Brief Description
          </Text>
        </View>
      </View>
      <View style={styles.clientNavigation}>
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
              source={require("../assets/repeatemusic1.png")}
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
            <Pressable
              style={styles.homeIcon}
              onPress={() => navigation.navigate("Frame10646")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </Pressable>
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.myKwafts, styles.homeSpaceBlock]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.fieldLayout]}
        onPress={() => navigation.navigate("Frame10669")}
      >
        <Text style={[styles.button1, styles.inputTypo]}>Book now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  singlePosition: {
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
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  fieldSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  leftIconLayout: {
    height: 18,
    width: 18,
  },
  inputClr: {
    color: Color.colorGray60,
    textAlign: "left",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  homeSpaceBlock: {
    marginTop: 4,
    width: 73,
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
    left: 0,
    paddingHorizontal: Padding.p_15xl,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_base,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
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
    top: 93,
    alignItems: "center",
    flexDirection: "row",
  },
  booking: {
    top: 139,
    left: 175,
    fontSize: FontSize.size_lg,
    color: Color.colorGray90,
    textAlign: "center",
    position: "absolute",
  },
  label: {
    color: Color.colorGray80,
  },
  leftIcon: {
    display: "none",
  },
  inputLabel: {
    width: 317,
    marginLeft: 8,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
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
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    marginLeft: 8,
  },
  leftIconParent: {
    display: "none",
  },
  singleLineInput: {
    top: 190,
    left: 34,
    position: "absolute",
  },
  singleLineInput1: {
    top: 293,
  },
  inputLabel2: {
    width: 289,
    marginLeft: 8,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  leftIcon7: {
    marginLeft: 8,
    display: "none",
  },
  singleLineInput2: {
    top: 396,
  },
  label3: {
    color: Color.colorGray70,
  },
  inputLabel3: {
    width: 345,
    height: 82,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  multipleLineInput: {
    top: 497,
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
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    display: "none",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.colorGray70,
    textAlign: "center",
  },
  repeateMusicParent: {
    marginLeft: 28,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
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
    left: -1,
    flexDirection: "row",
    position: "absolute",
  },
  button1: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    color: Color.lowfiWhite,
    textAlign: "center",
  },
  button: {
    top: 692,
    left: 31,
    backgroundColor: Color.mediumorchid,
    height: 60,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  statusBarParent: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen13;
