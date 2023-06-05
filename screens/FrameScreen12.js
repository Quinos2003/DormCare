import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameScreen12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={[styles.statusBar, styles.statusBarSpaceBlock]}>
        <View style={styles.statusBar1}>
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
      <Pressable
        style={styles.arrowLeftParent}
        onPress={() => navigation.navigate("Frame10656")}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={[styles.back, styles.backClr]}>Back</Text>
      </Pressable>
      <Text style={[styles.notifications, styles.notificationsClr]}>
        Notifications
      </Text>
      <View style={[styles.components, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Canceled
          </Text>
          <Text style={[styles.yourOrderWas, styles.myKwaftsTypo]}>
            Your order was accepted
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components1, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components2, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components3, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Accepted
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Canceled
          </Text>
          <Text style={[styles.yourOrderWas, styles.myKwaftsTypo]}>
            Your order was accepted
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components1, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components2, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components2, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components8, styles.componentsPosition]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Created
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components3, styles.componentsPosition1]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Accepted
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.components10, styles.componentsPosition]}>
        <Image
          style={styles.componentsChild}
          resizeMode="cover"
          source={require("../assets/frame-105905.png")}
        />
        <View style={styles.orderCanceledParent}>
          <Text style={[styles.orderCanceled, styles.notificationsClr]}>
            Order Accepted
          </Text>
        </View>
        <View style={styles.componentsInner}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.clientNavigation, styles.statusBarPosition]}>
        <View style={[styles.navigationhome, styles.statusBarSpaceBlock]}>
          <View style={styles.homeParent}>
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate("Frame10656")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/home2.png")}
              />
            </Pressable>
            <View style={[styles.rectangleView, styles.home1SpaceBlock]} />
            <Text style={[styles.home1, styles.home1SpaceBlock]}>Home</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.home}
              resizeMode="cover"
              source={require("../assets/repeatemusic.png")}
            />
            <View style={[styles.rectangleView, styles.home1SpaceBlock]} />
            <Text style={[styles.myKwafts, styles.home1SpaceBlock]}>
              My Kwafts
            </Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Image
              style={styles.home}
              resizeMode="cover"
              source={require("../assets/messagetext.png")}
            />
            <View style={[styles.rectangleView, styles.home1SpaceBlock]} />
            <Text style={[styles.myKwafts, styles.home1SpaceBlock]}>Chat</Text>
          </View>
          <View style={styles.repeateMusicParent}>
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate("Frame10646")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </Pressable>
            <View style={[styles.rectangleView, styles.home1SpaceBlock]} />
            <Text style={[styles.myKwafts, styles.home1SpaceBlock]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    backgroundColor: Color.lowfiWhite,
  },
  backClr: {
    color: Color.colorGray70,
    textAlign: "center",
  },
  notificationsClr: {
    color: Color.colorGray90,
    fontWeight: "500",
  },
  componentsPosition1: {
    padding: Padding.p_xs,
    backgroundColor: Color.thistle,
    left: 34,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  myKwaftsTypo: {
    display: "none",
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
  },
  frameLayout: {
    height: 2,
    width: 2,
  },
  componentsPosition: {
    left: 35,
    padding: Padding.p_xs,
    backgroundColor: Color.thistle,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  statusBarPosition: {
    left: 0,
    position: "absolute",
  },
  home1SpaceBlock: {
    marginTop: 4,
    width: 73,
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
    top: 0,
    paddingHorizontal: Padding.p_15xl,
    justifyContent: "flex-end",
    left: 0,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 17,
    height: 17,
  },
  back: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
  },
  arrowLeftParent: {
    top: 70,
    left: 32,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  notifications: {
    top: 110,
    left: 156,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratMedium,
    textAlign: "center",
    position: "absolute",
  },
  componentsChild: {
    width: 34,
    height: 35,
  },
  orderCanceled: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    fontFamily: FontFamily.typographyTaglineSmallMedium,
    width: 250,
    textAlign: "left",
  },
  yourOrderWas: {
    color: Color.colorGray60,
    width: 256,
    marginTop: 2,
    textAlign: "left",
  },
  orderCanceledParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  frameItem: {
    marginTop: 2,
  },
  ellipseParent: {
    top: 4,
    left: 8,
    justifyContent: "center",
    position: "absolute",
  },
  componentsInner: {
    width: 18,
    height: 18,
    marginLeft: 16,
    overflow: "hidden",
  },
  components: {
    top: 292,
  },
  components1: {
    top: 362,
  },
  components2: {
    top: 502,
  },
  components3: {
    top: 432,
  },
  components8: {
    top: 221,
  },
  components10: {
    top: 150,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home: {
    width: 24,
    height: 24,
  },
  rectangleView: {
    backgroundColor: Color.gainsboro,
    height: 0,
  },
  home1: {
    color: Color.mediumorchid,
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    width: 73,
    textAlign: "center",
  },
  homeParent: {
    alignItems: "center",
  },
  myKwafts: {
    display: "none",
    fontFamily: FontFamily.typographyTaglineSmallRegular,
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.colorGray70,
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
    justifyContent: "center",
    flexDirection: "row",
  },
  clientNavigation: {
    top: 846,
    flexDirection: "row",
  },
  statusBarParent: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen12;
