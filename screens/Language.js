import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Language = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.language}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <Text style={styles.text}>9:41</Text>
        <Image
          style={styles.statusBarChild}
          resizeMode="cover"
          source={require("../assets/group-135.png")}
        />
      </View>
      <Text style={styles.language1}>Language</Text>
      <Pressable
        style={[styles.arrowLeftWrapper, styles.statusBarFlexBox]}
        onPress={() => navigation.navigate("Frame10646")}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </Pressable>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.englishusParent, styles.parentLayout]}>
          <Text style={[styles.englishus, styles.hindiTypo]}>English(US)</Text>
          <Text style={[styles.englishuk, styles.hindiTypo]}>English(uk)</Text>
          <Text style={[styles.mandarin, styles.hindiTypo]}>Mandarin</Text>
          <Text style={[styles.hindi, styles.hindiTypo]}>Hindi</Text>
          <Text style={[styles.spanish, styles.hindiTypo]}>Spanish</Text>
          <Text style={[styles.french, styles.hindiTypo]}>French</Text>
          <Text style={[styles.arabic, styles.hindiTypo]}>Arabic</Text>
          <Text style={[styles.bengali, styles.hindiTypo]}>Bengali</Text>
          <Text style={[styles.russian, styles.hindiTypo]}>Russian</Text>
          <Text style={[styles.indonesia, styles.hindiTypo]}>Indonesia</Text>
          <Text style={[styles.suggested, styles.hindiTypo]}>Suggested</Text>
          <Text style={[styles.languages, styles.hindiTypo]}>Languages</Text>
          <Image
            style={[styles.icon21, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-21.png")}
          />
          <Image
            style={[styles.icon211, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-211.png")}
          />
          <Image
            style={[styles.icon212, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-212.png")}
          />
          <Image
            style={[styles.icon213, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-213.png")}
          />
          <Image
            style={[styles.icon214, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-214.png")}
          />
          <Image
            style={[styles.icon215, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-215.png")}
          />
          <Image
            style={[styles.icon216, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-216.png")}
          />
          <Image
            style={[styles.icon217, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-217.png")}
          />
          <Image
            style={[styles.icon218, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-218.png")}
          />
          <Image
            style={[styles.icon219, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-219.png")}
          />
        </View>
        <View style={styles.groupChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  parentLayout: {
    height: 694,
    position: "absolute",
  },
  hindiTypo: {
    textAlign: "left",
    color: Color.black,
    fontSize: 17,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "95.25%",
    right: "0%",
    width: "4.75%",
    height: "2.42%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.colorGray80,
    textAlign: "center",
    fontWeight: "600",
  },
  statusBarChild: {
    width: 67,
    height: 11,
    marginLeft: 265,
  },
  statusBar: {
    marginTop: -439,
    top: "50%",
    left: 34,
    justifyContent: "center",
  },
  language1: {
    top: 91,
    left: 71,
    fontSize: FontSize.size_3xl_5,
    color: Color.colorGray90,
    fontFamily: FontFamily.montserratSemibold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 17,
    height: 17,
  },
  arrowLeftWrapper: {
    top: 97,
    left: 32,
    alignItems: "center",
  },
  englishus: {
    top: 61,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  englishuk: {
    top: 121,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  mandarin: {
    top: 249,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  hindi: {
    top: 309,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  spanish: {
    top: 370,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  french: {
    top: 430,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  arabic: {
    top: 491,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  bengali: {
    top: 551,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  russian: {
    top: 612,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  indonesia: {
    top: 673,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: 17,
  },
  suggested: {
    color: Color.black,
    fontSize: 17,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 0,
  },
  languages: {
    top: 187,
    color: Color.black,
    fontSize: 17,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  icon21: {
    top: "8.73%",
    bottom: "88.85%",
  },
  icon211: {
    top: "17.46%",
    bottom: "80.12%",
  },
  icon212: {
    top: "35.86%",
    bottom: "61.72%",
  },
  icon213: {
    top: "44.59%",
    bottom: "52.99%",
  },
  icon214: {
    top: "53.32%",
    bottom: "44.26%",
  },
  icon215: {
    top: "62.05%",
    bottom: "35.53%",
  },
  icon216: {
    top: "70.78%",
    bottom: "26.8%",
  },
  icon217: {
    top: "79.51%",
    bottom: "18.07%",
  },
  icon218: {
    top: "88.24%",
    bottom: "9.34%",
  },
  icon219: {
    top: "96.97%",
    bottom: "0.61%",
  },
  englishusParent: {
    left: 11,
    width: 353,
    top: 0,
  },
  groupChild: {
    top: 174,
    borderStyle: "solid",
    borderColor: "#eee",
    borderTopWidth: 1,
    width: 381,
    height: 1,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 150,
    left: 24,
    width: 380,
  },
  language: {
    backgroundColor: Color.lowfiWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Language;
