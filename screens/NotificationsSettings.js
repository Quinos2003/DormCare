import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NotificationsSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationsSettings}>
      <View style={styles.statusBar}>
        <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        <Image
          style={styles.statusBarChild}
          resizeMode="cover"
          source={require("../assets/group-135.png")}
        />
      </View>
      <Text style={[styles.notificationsSettings1, styles.textTypo]}>
        Notifications Settings
      </Text>
      <Pressable
        style={styles.arrowLeftWrapper}
        onPress={() => navigation.navigate("Frame10646")}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </Pressable>
      <View style={[styles.masterComponents, styles.masterFlexBox]}>
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-10590.png")}
        />
        <View style={styles.emailNotificationsParent}>
          <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
            Email Notifications
          </Text>
          <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
            Push notifications to email
          </Text>
        </View>
        <View style={styles.toggleSwitch}>
          <View style={styles.toggleOff}>
            <View style={[styles.rectangle, styles.rectanglePosition1]} />
            <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.masterComponents1, styles.masterFlexBox]}>
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105901.png")}
        />
        <View style={styles.emailNotificationsParent}>
          <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
            App Updates
          </Text>
          <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
            Push notifications to email
          </Text>
        </View>
        <View style={styles.toggleSwitch}>
          <View style={styles.toggleOff}>
            <View style={[styles.rectangle, styles.rectanglePosition1]} />
            <View style={[styles.rectangle3, styles.rectangleShadowBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.masterComponents2, styles.masterFlexBox]}>
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105902.png")}
        />
        <View style={styles.emailNotificationsParent}>
          <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
            SMS Notifications
          </Text>
          <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
            Push notifications to phone
          </Text>
        </View>
        <View style={styles.toggleSwitch}>
          <View style={styles.toggleOff}>
            <View style={[styles.rectangle4, styles.rectanglePosition1]} />
            <View style={[styles.rectangle5, styles.rectangleShadowBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.masterComponents3, styles.masterFlexBox]}>
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105903.png")}
        />
        <View style={styles.emailNotificationsParent}>
          <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
            Order Notifications
          </Text>
          <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
            Receive orders notifications
          </Text>
        </View>
        <View style={styles.toggleSwitch}>
          <View style={styles.toggleOff}>
            <View style={[styles.rectangle, styles.rectanglePosition1]} />
            <View style={[styles.rectangle7, styles.rectangleShadowBox]} />
          </View>
        </View>
      </View>
      <View style={[styles.masterComponents4, styles.masterFlexBox]}>
        <Image
          style={styles.masterComponentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105904.png")}
        />
        <View style={styles.emailNotificationsParent}>
          <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
            Chat Notifications
          </Text>
          <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
            Receive chat or call notifications
          </Text>
        </View>
        <View style={styles.toggleSwitch}>
          <View style={styles.toggleOff}>
            <View style={[styles.rectangle, styles.rectanglePosition1]} />
            <View style={[styles.rectangle9, styles.rectangleShadowBox]} />
          </View>
        </View>
      </View>
      <View style={styles.masterComponentsParent}>
        <View style={[styles.masterComponents5, styles.masterFlexBox]}>
          <Image
            style={styles.masterComponentsChild}
            resizeMode="cover"
            source={require("../assets/frame-105901.png")}
          />
          <View style={styles.emailNotificationsParent}>
            <Text style={[styles.emailNotifications, styles.turnOnToLayout]}>
              General Notification
            </Text>
            <Text style={[styles.turnOnTo, styles.turnOnToLayout]}>
              Receive chat or call notifications
            </Text>
          </View>
          <View style={styles.toggleSwitch}>
            <View style={styles.toggleOff}>
              <View style={[styles.rectangle, styles.rectanglePosition1]} />
              <View style={[styles.rectangle11, styles.rectangleShadowBox]} />
            </View>
          </View>
        </View>
        <Image
          style={styles.notificationIcon}
          resizeMode="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <Image
        style={styles.icons8Update801}
        resizeMode="cover"
        source={require("../assets/icons8update80-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  masterFlexBox: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
  },
  turnOnToLayout: {
    width: 250,
    textAlign: "left",
  },
  rectanglePosition1: {
    borderRadius: Border.br_lg,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.lowfiWhite,
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
    flexDirection: "row",
    position: "absolute",
  },
  notificationsSettings1: {
    top: 92,
    left: 70,
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
    alignItems: "center",
    left: 32,
    flexDirection: "row",
    position: "absolute",
  },
  masterComponentsChild: {
    width: 34,
    height: 35,
  },
  emailNotifications: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray90,
  },
  turnOnTo: {
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    color: Color.colorGray60,
    marginTop: 2,
  },
  emailNotificationsParent: {
    width: 238,
    marginLeft: 16,
    justifyContent: "center",
  },
  rectangle: {
    backgroundColor: Color.mediumorchid,
  },
  rectangle1: {
    left: "52.78%",
    right: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  toggleOff: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  toggleSwitch: {
    width: 36,
    height: 20,
    marginLeft: 16,
  },
  masterComponents: {
    top: 464,
    left: 32,
  },
  rectangle3: {
    left: "52.78%",
    right: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  masterComponents1: {
    top: 541,
    left: 32,
  },
  rectangle4: {
    backgroundColor: Color.colorGray50,
  },
  rectangle5: {
    right: "52.78%",
    left: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  masterComponents2: {
    top: 233,
    left: 32,
  },
  rectangle7: {
    left: "52.78%",
    right: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  masterComponents3: {
    top: 310,
    left: 32,
  },
  rectangle9: {
    left: "52.78%",
    right: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  masterComponents4: {
    top: 387,
    left: 32,
  },
  rectangle11: {
    left: "52.78%",
    right: "8.33%",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    bottom: "15%",
    top: "15%",
    width: "38.89%",
    height: "70%",
  },
  masterComponents5: {
    top: 0,
    left: 0,
  },
  notificationIcon: {
    top: 21,
    left: 19,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  masterComponentsParent: {
    top: 156,
    width: 364,
    height: 62,
    left: 32,
    position: "absolute",
  },
  icons8Update801: {
    top: 562,
    left: 50,
    width: 21,
    height: 21,
    position: "absolute",
  },
  notificationsSettings: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lowfiWhite,
  },
});

export default NotificationsSettings;
