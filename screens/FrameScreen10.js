import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const FrameScreen10 = () => {
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
          source={require("../assets/calender.png")}
        />
      </View>
      <View style={[styles.field2, styles.fieldLayout]}>
        <Text style={styles.emailTypo}>Email</Text>
        <Image
          style={[styles.calenderIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/email.png")}
        />
      </View>
      <View style={[styles.field3, styles.fieldLayout]}>
        <Image
          style={styles.indiaIcon}
          resizeMode="cover"
          source={require("../assets/india.png")}
        />
        <Image
          style={styles.arrowRightIcon}
          resizeMode="cover"
          source={require("../assets/arrowright3.png")}
        />
        <Text style={[styles.phoneNo, styles.emailTypo]}>Phone No</Text>
      </View>
      <View style={[styles.field4, styles.fieldLayout]}>
        <Text style={styles.emailTypo}>Country</Text>
        <Image
          style={styles.arrowRightIcon}
          resizeMode="cover"
          source={require("../assets/arrowright4.png")}
        />
      </View>
      <View style={[styles.field5, styles.fieldLayout]}>
        <Text style={styles.emailTypo}>Address</Text>
        <Image
          style={[styles.locationPinIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/location-pin.png")}
        />
      </View>
      <View style={[styles.field6, styles.fieldLayout]}>
        <Text style={styles.emailTypo}>Gender</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame10646")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.update}>Update</Text>
      </Pressable>
      <View style={[styles.field7, styles.fieldLayout]}>
        <Text style={[styles.fullName, styles.nicknameTypo]}>Full Name</Text>
      </View>
      <Pressable
        style={styles.arrowRightParent}
        onPress={() => navigation.navigate("Frame10646")}
      >
        <Image
          style={[styles.arrowRightIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowright.png")}
        />
        <Text style={[styles.editProfile, styles.text2Typo]}>Edit Profile</Text>
      </Pressable>
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
    position: "absolute",
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
  groupChildLayout: {
    height: 55,
    width: 346,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  text1: {
    fontFamily: FontFamily.poppinsSemibold,
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
    top: 212,
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
    top: 287,
    left: 40,
  },
  field2: {
    top: 370,
    left: 40,
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
    top: 536,
    left: 40,
  },
  field4: {
    top: 453,
    left: 40,
  },
  locationPinIcon: {
    marginLeft: 8.55,
    height: 25,
    overflow: "hidden",
  },
  field5: {
    top: 702,
    left: 41,
  },
  field6: {
    top: 619,
    left: 40,
  },
  groupChild: {
    borderRadius: Border.br_8xl_5,
    backgroundColor: Color.mediumorchid,
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
  update: {
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
  field7: {
    top: 137,
    left: 40,
  },
  arrowRightIcon2: {
    top: 2,
    height: 25,
    left: 0,
    position: "absolute",
  },
  editProfile: {
    left: 36,
    fontSize: FontSize.size_3xl_5,
    letterSpacing: -1,
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  arrowRightParent: {
    top: 75,
    left: 30,
    width: 157,
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

export default FrameScreen10;
