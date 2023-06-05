import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const FrameScreen11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Text style={styles.text}>
            <Text style={styles.text1}>9:</Text>
            <Text style={styles.text2Typo}>41</Text>
          </Text>
          <Image
            style={styles.statusBarChild}
            resizeMode="cover"
            source={require("../assets/group-1351.png")}
          />
        </View>
      </View>
      <View style={styles.field}>
        <Text style={[styles.nickname, styles.nicknameTypo]}>Nickname</Text>
      </View>
      <View style={[styles.field1, styles.fieldLayout]}>
        <Text style={[styles.dateOfBirth, styles.nicknameTypo]}>
          Date of Birth
        </Text>
        <Image
          style={[styles.calenderIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/calender1.png")}
        />
      </View>
      <View style={[styles.field2, styles.fieldLayout]}>
        <Text style={styles.emailTypo}>Email</Text>
        <Image
          style={[styles.calenderIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/email1.png")}
        />
      </View>
      <View style={[styles.field3, styles.fieldLayout]}>
        <Image
          style={styles.indiaIcon}
          resizeMode="cover"
          source={require("../assets/india1.png")}
        />
        <Image
          style={styles.arrowRightIcon}
          resizeMode="cover"
          source={require("../assets/arrowright3.png")}
        />
        <Text style={[styles.phoneNo, styles.emailTypo]}>Phone No</Text>
      </View>
      <View style={[styles.field4, styles.field4Position]}>
        <Text style={styles.emailTypo}>Address</Text>
        <Image
          style={[styles.locationPinIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/location-pin1.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.signIn}>Sign in</Text>
      </Pressable>
      <View style={[styles.field5, styles.fieldLayout]}>
        <Text style={[styles.fullName, styles.nicknameTypo]}>Full Name</Text>
      </View>
      <View style={[styles.user1Parent, styles.user1Layout]}>
        <Image
          style={[styles.user1Icon, styles.user1Layout]}
          resizeMode="cover"
          source={require("../assets/user-11.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
      </View>
      <View style={styles.arrowRightParent}>
        <Image
          style={[styles.arrowRightIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowright.png")}
        />
        <Text style={[styles.fillYourProfileContainer, styles.field4Position]}>
          <Text style={styles.f}>F</Text>
          <Text style={styles.illYourProfile}>ill Your Profile</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nicknameTypo: {
    textAlign: "left",
    color: Color.colorGray60,
    fontSize: 14,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  fieldLayout: {
    borderRadius: Border.br_5xs_6,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 8,
    width: 346,
    backgroundColor: Color.whitesmoke,
    flexDirection: "row",
  },
  iconLayout: {
    width: 25,
    height: 25,
  },
  emailTypo: {
    width: 288,
    textAlign: "left",
    color: Color.colorGray60,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: 14,
  },
  field4Position: {
    left: 41,
    position: "absolute",
  },
  groupChildLayout: {
    height: 55,
    width: 346,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.mediumorchid,
    left: 0,
    top: 0,
  },
  user1Layout: {
    height: 142,
    width: 143,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 27,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  text2Typo: {
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
    justifyContent: "center",
    flexDirection: "row",
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
  nickname: {
    width: 274,
  },
  field: {
    top: 390,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 8,
    width: 346,
    backgroundColor: Color.whitesmoke,
    left: 40,
    flexDirection: "row",
    position: "absolute",
  },
  dateOfBirth: {
    width: 289,
  },
  calenderIcon: {
    marginLeft: 7.6,
    height: 25,
    overflow: "hidden",
  },
  field1: {
    top: 465,
    left: 40,
    position: "absolute",
  },
  field2: {
    top: 548,
    left: 40,
    position: "absolute",
  },
  indiaIcon: {
    width: 33,
    height: 25,
    overflow: "hidden",
  },
  arrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 8.55,
  },
  phoneNo: {
    marginLeft: 8.55,
  },
  field3: {
    top: 631,
    left: 40,
    position: "absolute",
  },
  locationPinIcon: {
    marginLeft: 8.55,
    height: 25,
    overflow: "hidden",
  },
  field4: {
    top: 714,
    borderRadius: Border.br_5xs_6,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 8,
    width: 346,
    backgroundColor: Color.whitesmoke,
    flexDirection: "row",
  },
  groupChild: {
    borderRadius: Border.br_8xl_5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10.431035041809082,
    },
    shadowRadius: 18.97,
    elevation: 18.97,
    shadowOpacity: 1,
    height: 55,
    width: 346,
    position: "absolute",
  },
  signIn: {
    top: 16,
    left: 137,
    fontSize: 17,
    lineHeight: 22,
    color: Color.lowfiWhite,
    width: 72,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 811,
    left: 40,
  },
  fullName: {
    width: 275,
  },
  field5: {
    top: 315,
    left: 40,
    position: "absolute",
  },
  user1Icon: {
    left: 0,
    top: 0,
  },
  groupItem: {
    borderRadius: 6,
    backgroundColor: Color.mediumorchid,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "77.78%",
    width: "77.78%",
    top: "11.11%",
    right: "11.11%",
    bottom: "11.11%",
    left: "11.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 107,
    left: 106,
  },
  user1Parent: {
    top: 137,
    left: 143,
  },
  arrowRightIcon1: {
    top: 2,
    height: 25,
    left: 0,
    position: "absolute",
  },
  f: {
    fontSize: FontSize.size_5xl,
  },
  illYourProfile: {
    fontSize: FontSize.size_3xl_5,
  },
  fillYourProfileContainer: {
    letterSpacing: -1,
    lineHeight: 30,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    top: 0,
  },
  arrowRightParent: {
    top: 75,
    left: 30,
    width: 205,
    height: 30,
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

export default FrameScreen11;
