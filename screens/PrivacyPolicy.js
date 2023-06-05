import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.privacyPolicy}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <Text style={styles.text}>9:41</Text>
        <Image
          style={styles.statusBarChild}
          resizeMode="cover"
          source={require("../assets/group-135.png")}
        />
      </View>
      <Text style={styles.privacyPolicy1}>Privacy Policy</Text>
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
      <View style={styles.groupParent}>
        <View style={styles.loremIpsumDolorSitAmetCoParent}>
          <Text style={[styles.loremIpsumDolor, styles.magnaTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.magnaEtiamTempor, styles.magnaTypo]}>
            Magna etiam tempor orci eu lobortis elementum nibh. Vulputate enim
            nulla aliquet porttitor lacus. Orci sagittis eu volutpat odio. Cras
            semper auctor neque vitae tempus quam pellentesque nec. Non quam
            lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
            Commodo elit at imperdiet dui. Nisi vitae suscipit tellus mauris a
            diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Mi
            ipsum faucibus vitae aliquet nec ullamcorper. Pellentesque pulvinar
            pellentesque habitant morbi tristique senectus et.
          </Text>
          <Text style={[styles.magnaEtiamTempor1, styles.magnaTypo]}>
            Magna etiam tempor orci eu lobortis elementum nibh. Vulputate enim
            nulla aliquet porttitor lacus. Orci sagittis eu volutpat odio. Cras
            semper auctor neque vitae tempus quam pellentesque nec. Non quam
            lacus suspendConsequat id porta nibh venenatis cras sed. lpsum nunc
            aliquet bibendum enim facilisis gravida neque. Nibh tellus molestie
            nunc non blandit massa. Quam pellentesque nec nam aliquam sem et
            tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit amet
            risus. Nunc consequat interdum varius sit amet. Eget magna fermentum
            iaculis et non diam phasellus vestibulum. Pulvinar pellentesque
            habitant morbi tristique senectus et. Lorem donec massa sapien
            faucibus et molestie. Massa tempor nec feugiat nis! pretium fusce
            id. Lacinia at quis risus sed vulputate odio. Integer vitae justo
            eget magna fermentum iaculis. Egetisse faucibus interdum posuere
            lorem ipsum dolor. Commodo elit at imperdiet dui. Nisi vitae
            suscipit tellus mauris a diam. Erat pellentesque adipiscing commodo
            elit at imperdiet dui. Mi ipsum faucibus vitae aliquet nec
            ullamcorper. Pellentesque pulvinar pellentesque habitant morbi
            tristique senectus et.
          </Text>
          <Text style={styles.typesOfData}>Types of Data We Collect</Text>
          <Text style={[styles.useOfYour, styles.yourTypo]}>
            2.Use of Your personal Data
          </Text>
          <Text style={[styles.disclosureOfYour, styles.yourTypo]}>
            3.Disclosure of Your Personal Data
          </Text>
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
  magnaTypo: {
    width: 346,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    left: 6,
    position: "absolute",
  },
  yourTypo: {
    left: 3,
    fontSize: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    position: "absolute",
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
  privacyPolicy1: {
    top: 91,
    left: 63,
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
  loremIpsumDolor: {
    top: 38,
  },
  magnaEtiamTempor: {
    top: 273,
  },
  magnaEtiamTempor1: {
    top: 548,
  },
  typesOfData: {
    fontSize: 17,
    left: 0,
    textAlign: "left",
    color: Color.black,
    top: 0,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  useOfYour: {
    top: 235,
  },
  disclosureOfYour: {
    top: 510,
  },
  loremIpsumDolorSitAmetCoParent: {
    left: 11,
    width: 352,
    top: 0,
    height: 1028,
    position: "absolute",
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
    top: 118,
    left: 24,
    width: 380,
    height: 1028,
    position: "absolute",
  },
  privacyPolicy: {
    backgroundColor: Color.lowfiWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default PrivacyPolicy;
