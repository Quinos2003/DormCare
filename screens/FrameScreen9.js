import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameScreen9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={[styles.statusBar, styles.statusBarSpaceBlock]}>
        <View style={styles.statusBar1FlexBox}>
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
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile, styles.text3Typo]}>Profile</Text>
      </View>
      <View style={[styles.user1Parent, styles.user1Layout]}>
        <Image
          style={[styles.user1Icon, styles.user1Layout]}
          resizeMode="cover"
          source={require("../assets/user-1.png")}
        />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={styles.clientNavigation}>
        <View style={[styles.navigationhome, styles.statusBar1FlexBox]}>
          <Pressable
            style={styles.homeParent}
            onPress={() => navigation.navigate("Frame10656")}
          >
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <View style={styles.frameChild} />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </Pressable>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/repeatemusic2.png")}
            />
            <View style={styles.frameChild} />
            <Text style={[styles.myKwafts, styles.homeTypo]}>My Kwafts</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/messagetext.png")}
            />
            <View style={styles.frameChild} />
            <Text style={[styles.myKwafts, styles.homeTypo]}>Chat</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
            <View style={styles.frameChild} />
            <Text style={styles.profile1}>Profile</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.fullName, styles.text3Typo]}>Full Name</Text>
      <Text style={styles.xyzxyzgmailcom}>xyz.xyz@gmail.com</Text>
      <View style={styles.lineView} />
      <View style={styles.vuesaxlineararrowRightParent}>
        <Image
          style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/ellipse-324.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon1, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={[styles.languageTranslation, styles.helpLayout]} />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorPosition]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <View style={[styles.help, styles.helpLayout]} />
        <Image
          style={[styles.vectorIcon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("Frame8")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Pressable
          style={styles.logout}
          onPress={() => navigation.navigate("Frame8")}
        >
          <Text style={styles.logout1}>Logout</Text>
        </Pressable>
        <Text style={[styles.helpCenter, styles.helpCenterTypo]}>
          Help Center
        </Text>
        <Text style={[styles.darkMode, styles.darkModeTypo]}>Dark Mode</Text>
        <Pressable
          style={styles.language}
          onPress={() => navigation.navigate("Language")}
        >
          <Text style={[styles.language1, styles.darkModeTypo]}>Language</Text>
        </Pressable>
        <Pressable
          style={styles.security}
          onPress={() => navigation.navigate("Frame10654")}
        >
          <Text style={[styles.language1, styles.darkModeTypo]}>Security</Text>
        </Pressable>
        <Pressable
          style={styles.notification}
          onPress={() => navigation.navigate("NotificationsSettings")}
        >
          <Text
            style={[styles.notification1, styles.darkModeTypo]}
          >{`Notification `}</Text>
        </Pressable>
        <Pressable
          style={[styles.inviteFriends, styles.darkModePosition]}
          onPress={() => navigation.navigate("InviteFriends")}
        >
          <Text style={[styles.inviteFriends1, styles.darkModeTypo]}>
            Invite Friends
          </Text>
        </Pressable>
        <Pressable
          style={styles.editProfile}
          onPress={() => navigation.navigate("Frame10648")}
        >
          <Text style={[styles.notification1, styles.darkModeTypo]}>
            Edit Profile
          </Text>
        </Pressable>
        <Pressable
          style={[styles.privacyPolicy, styles.darkModePosition]}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Text style={[styles.privacyPolicy1, styles.helpCenterTypo]}>
            Privacy Policy
          </Text>
        </Pressable>
      </View>
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={styles.text3Position}
        resizeMode="cover"
        source={require("../assets/ellipse-35.png")}
      />
      <Text style={[styles.text3, styles.text3Position]}>...</Text>
      <Image
        style={styles.image13Icon}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  text3Typo: {
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  user1Layout: {
    height: 168,
    width: 168,
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBar1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  homeTypo: {
    display: "none",
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    marginTop: 4,
    width: 73,
    textAlign: "center",
  },
  groupIconPosition: {
    left: "0.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 23,
    width: 43,
    position: "absolute",
  },
  helpLayout: {
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    height: "4.23%",
    right: "94.53%",
    position: "absolute",
  },
  helpCenterTypo: {
    fontSize: 15,
    lineHeight: 39,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  darkModeTypo: {
    height: 40,
    fontSize: 15,
    lineHeight: 39,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  darkModePosition: {
    left: 40,
    position: "absolute",
  },
  text3Position: {
    height: 25,
    width: 25,
    left: 367,
    top: 77,
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
  statusBar: {
    paddingHorizontal: Padding.p_15xl,
    justifyContent: "flex-end",
    left: 0,
    top: 0,
    position: "absolute",
  },
  profile: {
    letterSpacing: -1,
    lineHeight: 30,
    fontSize: FontSize.size_3xl_5,
    color: Color.black,
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 75,
    left: 75,
    width: 72,
    height: 30,
    position: "absolute",
  },
  user1Icon: {
    left: 0,
    top: 0,
  },
  groupChild: {
    borderRadius: 7,
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
    position: "absolute",
  },
  rectangleParent: {
    top: 126,
    left: 125,
  },
  user1Parent: {
    top: 138,
    left: 130,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  frameChild: {
    height: 0,
    marginTop: 4,
    width: 73,
    backgroundColor: Color.gainsboro,
  },
  home: {
    color: Color.mediumorchid,
  },
  homeParent: {
    alignItems: "center",
  },
  myKwafts: {
    color: Color.colorGray70,
  },
  repeateMusicParent: {
    marginLeft: 28,
    alignItems: "center",
  },
  profile1: {
    color: Color.mediumorchid,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    marginTop: 4,
    width: 73,
    textAlign: "center",
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
    left: 0,
    position: "absolute",
  },
  fullName: {
    top: 334,
    left: 138,
    fontSize: 29,
    position: "absolute",
  },
  xyzxyzgmailcom: {
    left: 149,
    top: 375,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  lineView: {
    top: 412,
    left: 24,
    borderStyle: "solid",
    borderColor: "#eee",
    borderTopWidth: 1,
    width: 381,
    height: 1,
    position: "absolute",
  },
  vuesaxlineararrowRightIcon: {
    height: "90.81%",
    width: "27.3%",
    top: "0%",
    right: "0%",
    bottom: "9.19%",
    left: "72.7%",
    position: "absolute",
  },
  groupIcon: {
    height: "4.74%",
    width: "5.22%",
    top: "20.11%",
    right: "94.51%",
    bottom: "75.14%",
  },
  groupItem: {
    borderRadius: 12,
    backgroundColor: Color.gainsboro,
    width: 43,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleGroup: {
    top: 336,
    left: 314,
  },
  groupIcon1: {
    height: "4.66%",
    width: "5.24%",
    top: "29.37%",
    right: "94.49%",
    bottom: "65.98%",
  },
  vectorIcon1: {
    height: "4.65%",
    top: "47.84%",
    right: "94.56%",
    bottom: "47.51%",
    left: "0.49%",
    width: "4.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  languageTranslation: {
    top: 322,
    left: 115,
  },
  vectorIcon2: {
    height: "3.84%",
    top: "57.36%",
    bottom: "38.8%",
    left: "0.52%",
    right: "94.53%",
    width: "4.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    height: "3.4%",
    width: "6.17%",
    top: "66.8%",
    right: "94.05%",
    bottom: "29.8%",
    left: "-0.22%",
    position: "absolute",
  },
  vectorIcon3: {
    width: "5.21%",
    top: "75.42%",
    bottom: "20.36%",
    left: "0.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  help: {
    top: 382,
    left: 3,
  },
  vectorIcon4: {
    height: "4.42%",
    width: "5.99%",
    top: "84.64%",
    right: "94.01%",
    bottom: "10.94%",
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "0.78%",
    top: "94.05%",
    bottom: "1.72%",
    width: "4.69%",
  },
  logout1: {
    fontSize: 16,
    color: "#f75555",
    lineHeight: 39,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  logout: {
    left: 42,
    top: 469,
    position: "absolute",
  },
  helpCenter: {
    top: 422,
    left: 40,
    position: "absolute",
  },
  darkMode: {
    top: 327,
    width: 91,
    height: 40,
    left: 40,
    position: "absolute",
  },
  language1: {
    width: 91,
    height: 40,
  },
  language: {
    left: 38,
    top: 282,
    position: "absolute",
  },
  security: {
    left: 30,
    top: 235,
    position: "absolute",
  },
  notification1: {
    width: 97,
  },
  notification: {
    left: 39,
    top: 142,
    position: "absolute",
  },
  inviteFriends1: {
    width: 114,
  },
  inviteFriends: {
    top: 187,
  },
  editProfile: {
    left: 36,
    top: 95,
    position: "absolute",
  },
  privacyPolicy1: {
    width: 112,
  },
  privacyPolicy: {
    top: 375,
  },
  vuesaxlineararrowRightParent: {
    height: "54.86%",
    width: "87.58%",
    top: "35.64%",
    right: "4.43%",
    bottom: "9.51%",
    left: "7.98%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "1.51%",
    width: "4.91%",
    top: "57.24%",
    right: "87.15%",
    bottom: "41.25%",
    left: "7.94%",
    position: "absolute",
  },
  text3: {
    letterSpacing: 1,
    lineHeight: 13,
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_3xl_5,
  },
  image13Icon: {
    top: 69,
    left: 19,
    width: 41,
    height: 43,
    position: "absolute",
  },
  statusBarParent: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.lowfiWhite,
    width: "100%",
  },
});

export default FrameScreen9;
