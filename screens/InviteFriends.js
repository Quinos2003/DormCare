import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const InviteFriends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inviteFriends}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <Text style={[styles.text, styles.textTypo3]}>9:41</Text>
        <Image
          style={styles.statusBarChild}
          resizeMode="cover"
          source={require("../assets/group-135.png")}
        />
      </View>
      <Text style={[styles.inviteFriends1, styles.textTypo3]}>
        Invite Friends
      </Text>
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
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Text style={[styles.zukkuBenzos, styles.textTypo2]}>Zukku Benzos</Text>
        <Text style={[styles.text1, styles.textClr]}>+91 93159942296</Text>
        <Image
          style={[styles.groupItem, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-39.png")}
        />
        <Text style={[styles.yelenaG, styles.textTypo1]}>Yelena G.</Text>
        <Text style={[styles.text2, styles.textTypo1]}>+91 738****196</Text>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <Text style={[styles.vibhuK, styles.textTypo2]}>Vibhu K.</Text>
        <Text style={[styles.text3, styles.textClr]}>+91 896****102</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-41.png")}
        />
        <Text style={[styles.nancyJack, styles.textTypo2]}>Nancy Jack</Text>
        <Text style={[styles.text4, styles.textClr]}>+91 93****2296</Text>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <Text style={[styles.angelaJ, styles.textTypo1]}>Angela J.</Text>
        <Text style={[styles.text5, styles.textTypo1]}>+91 93****1852</Text>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Text style={[styles.eriMick, styles.textTypo1]}>Eri Mick</Text>
        <Text style={[styles.text6, styles.textTypo1]}>+91 93****2845</Text>
        <Image
          style={[styles.groupChild3, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-44.png")}
        />
        <Text style={[styles.fabiola, styles.textTypo]}>Fabiola</Text>
        <Text style={[styles.text7, styles.textTypo]}>+91 73****1811</Text>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Text style={[styles.eriMick1, styles.textTypo]}>Eri Mick</Text>
        <Text style={[styles.text8, styles.textTypo]}>+91 43****2845</Text>
        <Image
          style={styles.groupChild5}
          resizeMode="cover"
          source={require("../assets/ellipse-26.png")}
        />
        <Text style={[styles.abhiSingh, styles.text9Typo]}>Abhi Singh</Text>
        <Text style={[styles.text9, styles.text9Typo]}>+91 96138527410</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.invite, styles.textTypo2]}>Invite</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo3: {
    textAlign: "center",
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  textClr: {
    color: Color.dimgray,
    fontSize: 12,
  },
  textTypo1: {
    left: 77,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChildPosition: {
    left: 2,
    height: 62,
    width: 62,
    position: "absolute",
  },
  textTypo: {
    left: 79,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  text9Typo: {
    left: "41.56%",
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupViewLayout: {
    height: 26,
    width: 55,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.colorGray80,
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
  inviteFriends1: {
    top: 91,
    left: 64,
    fontSize: FontSize.size_3xl_5,
    fontFamily: FontFamily.montserratSemibold,
    color: Color.colorGray90,
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
  groupChild: {
    left: 1,
    width: 62,
    top: 0,
  },
  zukkuBenzos: {
    top: 7,
    color: Color.gray_200,
    fontSize: 17,
    left: 78,
    fontFamily: FontFamily.openSansSemibold,
  },
  text1: {
    top: 31,
    opacity: 0.91,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
    left: 78,
  },
  groupItem: {
    top: 164,
    left: 0,
  },
  yelenaG: {
    top: 171,
    color: Color.gray_200,
    fontSize: 17,
  },
  text2: {
    top: 195,
    color: Color.dimgray,
    fontSize: 12,
  },
  groupInner: {
    top: 246,
    left: 1,
    width: 62,
  },
  vibhuK: {
    top: 253,
    color: Color.gray_200,
    fontSize: 17,
    left: 78,
    fontFamily: FontFamily.openSansSemibold,
  },
  text3: {
    top: 277,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
    left: 78,
  },
  ellipseIcon: {
    top: 328,
    left: 1,
    width: 62,
  },
  nancyJack: {
    top: 335,
    color: Color.gray_200,
    fontSize: 17,
    left: 78,
    fontFamily: FontFamily.openSansSemibold,
  },
  text4: {
    top: 359,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    position: "absolute",
    left: 78,
  },
  groupChild1: {
    top: 410,
    left: 0,
  },
  angelaJ: {
    top: 417,
    color: Color.gray_200,
    fontSize: 17,
  },
  text5: {
    top: 441,
    color: Color.dimgray,
    fontSize: 12,
  },
  groupChild2: {
    top: 492,
    left: 0,
  },
  eriMick: {
    top: 500,
    color: Color.gray_200,
    fontSize: 17,
  },
  text6: {
    top: 523,
    color: Color.dimgray,
    fontSize: 12,
  },
  groupChild3: {
    top: 582,
  },
  fabiola: {
    top: 589,
    color: Color.gray_200,
    fontSize: 17,
  },
  text7: {
    top: 613,
    color: Color.dimgray,
    fontSize: 12,
  },
  groupChild4: {
    top: 664,
  },
  eriMick1: {
    top: 671,
    color: Color.gray_200,
    fontSize: 17,
  },
  text8: {
    top: 695,
    color: Color.dimgray,
    fontSize: 12,
  },
  groupChild5: {
    height: "8.48%",
    width: "31.57%",
    top: "11.17%",
    right: "66.33%",
    bottom: "80.35%",
    left: "2.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  abhiSingh: {
    top: "12.16%",
    color: Color.gray_200,
    fontSize: 17,
  },
  text9: {
    top: "15.41%",
    color: Color.dimgray,
    fontSize: 12,
  },
  ellipseParent: {
    top: 170,
    left: 41,
    width: 195,
    height: 726,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 13,
    backgroundColor: Color.mediumorchid,
    left: 0,
    top: 0,
  },
  invite: {
    top: 5,
    left: 12,
    fontSize: 11,
    color: Color.lowfiWhite,
  },
  rectangleParent: {
    top: 189,
    left: 337,
    width: 55,
  },
  rectangleGroup: {
    top: 270,
    left: 337,
    width: 55,
  },
  rectangleContainer: {
    top: 682,
    left: 337,
    width: 55,
  },
  groupView: {
    top: 767,
    left: 337,
    width: 55,
  },
  rectangleParent1: {
    top: 850,
    left: 337,
    width: 55,
  },
  rectangleParent2: {
    top: 517,
    left: 337,
    width: 55,
  },
  rectangleParent3: {
    top: 599,
    left: 337,
    width: 55,
  },
  rectangleParent4: {
    top: 353,
    left: 337,
    width: 55,
  },
  rectangleParent5: {
    top: 435,
    left: 337,
    width: 55,
  },
  inviteFriends: {
    backgroundColor: Color.lowfiWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default InviteFriends;
