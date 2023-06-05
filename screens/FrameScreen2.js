import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FrameScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={[styles.statusBar, styles.statusBarSpaceBlock]}>
        <View style={styles.statusBar1FlexBox}>
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
      <Text style={[styles.welcomeEnola, styles.servicesFlexBox]}>
        Welcome Enola,
      </Text>
      <Pressable
        style={[styles.notification, styles.viewAllPosition]}
        onPress={() => navigation.navigate("Frame10663")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/notification1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.singleLineInput}
        onPress={() => navigation.navigate("Frame14")}
      >
        <Text style={styles.label}>Label</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputLabelClr]}>Search</Text>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/-left-icon3.png")}
          />
        </View>
        <View style={[styles.leftIconParent, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIcon2}
            resizeMode="cover"
            source={require("../assets/-left-icon4.png")}
          />
          <Text style={[styles.weAllWanna, styles.inputLabelClr]}>
            We all wanna make money, let’s do this
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.services, styles.servicesFlexBox]}>Services</Text>
      <Text style={[styles.mostPopularServices, styles.servicesFlexBox]}>
        Most Popular Services
      </Text>
      <Pressable
        style={[styles.masterComponents, styles.masterSpaceBlock]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-10593.png")}
        />
        <Text style={styles.medical}>Room Keeping</Text>
      </Pressable>
      <Pressable
        style={[styles.masterComponents1, styles.masterSpaceBlock]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-10593.png")}
        />
        <Text style={styles.medical}>Pest Control</Text>
      </Pressable>
      <Pressable
        style={[styles.masterComponents2, styles.masterPosition1]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105931.png")}
        />
        <Text style={styles.medical}>Electrician</Text>
      </Pressable>
      <Pressable
        style={[styles.masterComponents3, styles.masterPosition1]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105931.png")}
        />
        <Text style={styles.medical}>Laundry</Text>
      </Pressable>
      <Pressable
        style={[styles.masterComponents4, styles.masterPosition]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105932.png")}
        />
        <Text style={styles.medical}>Carpenter</Text>
      </Pressable>
      <Pressable
        style={[styles.masterComponents5, styles.masterPosition]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105932.png")}
        />
        <Text style={styles.medical}>Repairing</Text>
      </Pressable>
      <View style={styles.clientNavigation}>
        <View style={[styles.navigationhome, styles.statusBar1FlexBox]}>
          <View style={styles.homeParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/repeatemusic.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>My Kwafts</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/messagetext.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>Chat</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.component1}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.frameChild1, styles.frameChildBorder]} />
          <Text style={[styles.roomKeeping, styles.laundryTypo]}>
            Room Keeping
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.frameChild2} />
          <Text style={styles.all}>All</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.frameChild3, styles.frameChildBorder]} />
          <Text style={[styles.laundry, styles.laundryTypo]}>Laundry</Text>
        </View>
      </View>
      <Text style={[styles.viewAll, styles.homeTypo]}>View all</Text>
      <View style={[styles.frameView, styles.rectangleParentLayout]}>
        <View style={[styles.frameChild4, styles.frameChildShadowBox]} />
        <Image
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.tosinKehinde, styles.ratingPosition]}>
          Tosin Kehinde
        </Text>
        <Text style={[styles.houseCleaning, styles.carpenterTypo]}>
          House Cleaning
        </Text>
        <Text style={[styles.rs100, styles.rs100Position]}>Rs.100</Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star3.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star4.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.frameChild5, styles.frameChildLayout]} />
        <Image
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.chetanRoy, styles.rs100Position]}>Chetan Roy</Text>
        <Text style={[styles.carpenter, styles.rs100Position]}>Carpenter</Text>
        <Text style={[styles.rs100, styles.rs100Position]}>Rs.80</Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star3.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star4.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.frameChild6, styles.frameChildLayout]} />
        <Image
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.tosinKehinde, styles.ratingPosition]}>
          Tosin Kehinde
        </Text>
        <Text style={[styles.electrician, styles.carpenterTypo]}>
          Electrician
        </Text>
        <Text style={[styles.rs100, styles.rs100Position]}>Rs.100</Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star3.png")}
          />
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star4.png")}
          />
        </View>
      </View>
      <View style={styles.clientNavigation1}>
        <View style={[styles.navigationhome, styles.statusBar1FlexBox]}>
          <View style={styles.homeParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/repeatemusic.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>My Kwafts</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/messagetext.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>Chat</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
            <View style={[styles.frameChild, styles.homeSpaceBlock]} />
            <Text style={styles.myKwafts}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={[styles.frameChild11, styles.frameChildShadowBox]} />
        <Text
          style={[styles.offersComingSoon, styles.servicesFlexBox]}
        >{`Offers Coming
Soon`}</Text>
        <Image
          style={styles.offersIcon}
          resizeMode="cover"
          source={require("../assets/offers.png")}
        />
      </View>
      <Image
        style={styles.dotsIcon}
        resizeMode="cover"
        source={require("../assets/dots.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  servicesFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  viewAllPosition: {
    left: 347,
    position: "absolute",
  },
  fieldSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  leftIconLayout: {
    height: 18,
    width: 18,
  },
  inputLabelClr: {
    color: Color.colorGray60,
    marginLeft: 8,
    textAlign: "left",
  },
  masterSpaceBlock: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_10xl,
    width: 112,
    backgroundColor: Color.colorExtrasBlue,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    position: "absolute",
  },
  masterPosition1: {
    backgroundColor: Color.colorExtrasGreen,
    left: 159,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_10xl,
    width: 112,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    position: "absolute",
  },
  masterPosition: {
    backgroundColor: Color.colorExtrasRed,
    left: 284,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_10xl,
    width: 112,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    position: "absolute",
  },
  statusBar1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  homeSpaceBlock: {
    marginTop: 4,
    width: 73,
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  frameChildBorder: {
    borderColor: "#9453c5",
    borderRadius: Border.br_3xs,
    height: 36,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  laundryTypo: {
    color: Color.black,
    top: 8,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.mediumorchid,
  },
  rectangleParentLayout: {
    height: 158,
    position: "absolute",
  },
  frameChildShadowBox: {
    width: 359,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    height: 158,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
  },
  ratingPosition: {
    left: 171,
    position: "absolute",
  },
  carpenterTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray90,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  rs100Position: {
    left: 172,
    textAlign: "center",
    position: "absolute",
  },
  frameChildLayout: {
    width: 358,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 158,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
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
    textAlign: "center",
    color: Color.colorGray80,
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
  welcomeEnola: {
    top: 69,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray80,
    left: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  notification: {
    top: 56,
    width: 48,
    height: 48,
  },
  label: {
    fontFamily: FontFamily.typographyTaglineSmallMedium,
    display: "none",
    width: 364,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    textAlign: "left",
    color: Color.colorGray80,
  },
  leftIcon: {
    display: "none",
  },
  inputLabel: {
    width: 317,
    marginLeft: 8,
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray60,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
  },
  leftIcon1: {
    marginLeft: 8,
  },
  field: {
    borderColor: "#848484",
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginTop: 8,
    width: 364,
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
    top: 121,
    left: 32,
    position: "absolute",
  },
  services: {
    top: 419,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    left: 33,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray80,
  },
  mostPopularServices: {
    top: 744,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    left: 33,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray80,
  },
  masterComponentsChild: {
    width: 54,
    height: 54,
  },
  medical: {
    color: Color.colorGray90,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    marginTop: 8,
    textAlign: "center",
  },
  masterComponents: {
    top: 456,
    left: 33,
  },
  masterComponents1: {
    left: 31,
    top: 589,
  },
  masterComponents2: {
    top: 456,
  },
  masterComponents3: {
    top: 589,
  },
  masterComponents4: {
    top: 456,
  },
  masterComponents5: {
    top: 589,
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
    color: Color.colorGray70,
    marginTop: 4,
    width: 73,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    display: "none",
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
    top: 1420,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameChild1: {
    width: 174,
  },
  roomKeeping: {
    left: 26,
  },
  rectangleParent: {
    width: "48.07%",
    right: "30.66%",
    left: "21.27%",
  },
  frameChild2: {
    backgroundColor: Color.mediumorchid,
    width: 66,
    borderRadius: Border.br_3xs,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  all: {
    left: 23,
    color: Color.lowfiWhite,
    top: 8,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    width: "18.23%",
    right: "81.77%",
    left: "0%",
  },
  frameChild3: {
    width: 101,
  },
  laundry: {
    left: 17,
  },
  rectangleContainer: {
    width: "27.9%",
    right: "0%",
    left: "72.1%",
  },
  component1: {
    top: 788,
    width: 362,
    height: 36,
    left: 34,
    position: "absolute",
  },
  viewAll: {
    top: 747,
    textAlign: "right",
    color: Color.mediumorchid,
    fontFamily: FontFamily.montserratRegular,
    left: 347,
    position: "absolute",
  },
  frameChild4: {
    left: 0,
  },
  maskGroupIcon: {
    top: 20,
    left: 18,
    width: 119,
    height: 118,
    position: "absolute",
  },
  tosinKehinde: {
    top: 29,
    color: Color.colorGray70,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  houseCleaning: {
    top: 54,
    fontSize: FontSize.size_xl,
    left: 171,
    position: "absolute",
    textAlign: "center",
  },
  rs100: {
    top: 86,
    color: Color.mediumorchid,
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  rating: {
    top: 116,
    width: 94,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameView: {
    top: 855,
    width: 363,
    height: 158,
    left: 32,
  },
  frameChild5: {
    left: -2,
    elevation: 4,
    shadowRadius: 4,
    width: 358,
  },
  chetanRoy: {
    top: 29,
    color: Color.colorGray70,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  carpenter: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray90,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 54,
  },
  rectangleParent1: {
    top: 1039,
    width: 361,
    left: 34,
    height: 158,
  },
  frameChild6: {
    shadowRadius: 3,
    elevation: 3,
    left: 0,
  },
  electrician: {
    top: 55,
    left: 171,
    position: "absolute",
    textAlign: "center",
  },
  rectangleParent2: {
    top: 1214,
    width: 366,
    left: 32,
  },
  clientNavigation1: {
    top: 854,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameChild11: {
    left: 2,
  },
  offersComingSoon: {
    top: 50,
    left: 143,
    fontSize: 24,
    color: Color.colorGray90,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  offersIcon: {
    top: 45,
    left: 45,
    width: 69,
    height: 69,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent3: {
    top: 216,
    width: 363,
    height: 158,
    left: 33,
  },
  dotsIcon: {
    top: 364,
    left: 180,
    width: 68,
    height: 68,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarParent: {
    flex: 1,
    height: 933,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen2;
