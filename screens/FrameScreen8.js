import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameScreen8 = () => {
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
      <View style={[styles.ellipseParent, styles.ellipsePosition]}>
        <Image
          style={styles.text3Position}
          resizeMode="cover"
          source={require("../assets/ellipse-35.png")}
        />
        <Text style={[styles.text3, styles.textTypo]}>...</Text>
        <Text style={[styles.myBooking, styles.bookingTypo]}>My Booking</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Text style={[styles.upcoming, styles.upcomingLayout]}>Upcoming</Text>
      <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
      <Text style={styles.viewReceipt}>View Receipt</Text>
      <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
        <Image
          style={styles.text4Position}
          resizeMode="cover"
          source={require("../assets/ellipse-35.png")}
        />
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
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={styles.home}>Home</Text>
            </Pressable>
            <View style={styles.repeateMusicParent}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/repeatemusic1.png")}
              />
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={styles.chatTypo}>My Orders</Text>
            </View>
            <View style={styles.repeateMusicParent}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/messagetext.png")}
              />
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
            </View>
            <View style={styles.repeateMusicParent}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
              <View style={[styles.rectangleView, styles.frameChildLayout]} />
              <Text style={styles.home}>Profile</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text4, styles.text4Position]}>...</Text>
        <Text style={[styles.myBooking1, styles.bookingTypo]}>My Booking</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Text style={[styles.cancelled, styles.completedTypo]}>Cancelled</Text>
      <Image
        style={styles.fileFoundFlatIllustration4Icon}
        resizeMode="cover"
        source={require("../assets/filefoundflatillustration-41830262--1-removebg-1.png")}
      />
      <Text style={[styles.youHaveNo, styles.youHaveNoTypo]}>
        You have no upcoming booking
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-85.png")}
      />
      <Pressable
        style={styles.makeNewBookingContainer}
        onPress={() => navigation.navigate("Frame10667")}
      >
        <Text style={[styles.makeNewBooking, styles.youHaveNoTypo]}>
          Make New Booking
        </Text>
      </Pressable>
      <Text style={styles.byClickingThe}>
        By clicking the button below Make a new booking
      </Text>
      <View style={[styles.frameChild1, styles.groupItemLayout]} />
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
  ellipsePosition: {
    top: 90,
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    lineHeight: 13,
    letterSpacing: 1,
    fontSize: FontSize.size_3xl_5,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  bookingTypo: {
    lineHeight: 30,
    letterSpacing: 0.3,
    color: Color.black,
    fontSize: FontSize.size_3xl_5,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 2,
    position: "absolute",
  },
  upcomingLayout: {
    height: 41,
    width: 133,
    top: 174,
  },
  completedTypo: {
    color: Color.darkgray,
    lineHeight: 39,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  statusBar1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  frameChildLayout: {
    marginTop: 4,
    height: 0,
    width: 73,
  },
  chatTypo: {
    color: Color.colorGray70,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    marginTop: 4,
    width: 73,
    textAlign: "center",
  },
  text4Position: {
    left: 367,
    height: 25,
    width: 25,
    top: 1,
    position: "absolute",
  },
  youHaveNoTypo: {
    height: 28,
    width: 363,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 26,
    fontSize: 21,
    textAlign: "center",
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
    lineHeight: 20,
    color: Color.colorGray80,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
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
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  text3Position: {
    height: 25,
    width: 25,
    left: 343,
    top: 1,
    position: "absolute",
  },
  text3: {
    height: 25,
    width: 25,
    left: 343,
    top: 1,
    position: "absolute",
  },
  myBooking: {
    left: 52,
  },
  vectorIcon: {
    height: "20%",
    width: "6.58%",
    top: "0.8%",
    right: "17.37%",
    bottom: "79.2%",
    left: "76.05%",
  },
  groupItem: {
    top: 124,
    left: -1,
    borderColor: "#eee",
    borderTopWidth: 1.5,
    width: 382,
    borderStyle: "solid",
  },
  ellipseParent: {
    left: 24,
    width: 380,
    height: 125,
  },
  upcoming: {
    left: 14,
    color: Color.mediumorchid,
    lineHeight: 39,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    height: 41,
    width: 133,
    top: 174,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  completed: {
    left: 147,
    height: 41,
    width: 133,
    top: 174,
    color: Color.darkgray,
  },
  viewReceipt: {
    top: 431,
    left: 157,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.lowfiWhite,
    textAlign: "center",
    position: "absolute",
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  frameChild: {
    backgroundColor: Color.gainsboro,
  },
  home: {
    display: "none",
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    marginTop: 4,
    width: 73,
    color: Color.mediumorchid,
    textAlign: "center",
  },
  homeParent: {
    alignItems: "center",
  },
  repeateMusicParent: {
    marginLeft: 28,
    alignItems: "center",
  },
  chat: {
    display: "none",
  },
  rectangleView: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },
  navigationhome: {
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    width: 428,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  clientNavigation: {
    top: 756,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  text4: {
    color: Color.black,
    lineHeight: 13,
    letterSpacing: 1,
    fontSize: FontSize.size_3xl_5,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  myBooking1: {
    left: 76,
  },
  vectorIcon1: {
    height: "2.99%",
    width: "5.84%",
    top: "0.12%",
    right: "21.03%",
    bottom: "96.89%",
    left: "73.13%",
  },
  ellipseGroup: {
    height: 836,
    width: 428,
    left: 0,
  },
  cancelled: {
    height: "4.43%",
    width: "31.07%",
    top: "18.79%",
    left: "65.42%",
  },
  fileFoundFlatIllustration4Icon: {
    top: 234,
    left: 8,
    width: 412,
    height: 373,
    position: "absolute",
  },
  youHaveNo: {
    top: 593,
    left: 32,
    color: "#5139a6",
    position: "absolute",
  },
  rectangleIcon: {
    top: 725,
    left: 58,
    borderRadius: 22,
    width: 312,
    height: 63,
    position: "absolute",
  },
  makeNewBooking: {
    color: "#7210ff",
  },
  makeNewBookingContainer: {
    left: 33,
    top: 734,
    position: "absolute",
  },
  byClickingThe: {
    top: 632,
    left: 41,
    lineHeight: 19,
    fontFamily: FontFamily.montserratRegular,
    color: "#3e2d5c",
    width: 346,
    height: 30,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameChild1: {
    top: 214,
    left: 34,
    backgroundColor: Color.mediumorchid,
    width: 98,
  },
  image13Icon: {
    top: 83,
    left: 28,
    width: 41,
    height: 43,
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

export default FrameScreen8;
