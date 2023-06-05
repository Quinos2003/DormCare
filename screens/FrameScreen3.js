import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FrameScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
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
      <View style={[styles.singleLineInput, styles.leftIconPosition]}>
        <Text style={styles.label}>Label</Text>
        <View style={[styles.field, styles.fieldSpaceBlock]}>
          <Image
            style={styles.leftIconLayout}
            resizeMode="cover"
            source={require("../assets/-left-icon.png")}
          />
          <Text style={[styles.inputLabel, styles.inputLabelClr]}>|</Text>
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
      </View>
      <Pressable
        style={[styles.arrowLeftParent, styles.leftIconPosition]}
        onPress={() => navigation.navigate("Frame10656")}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Text style={[styles.recentSearches, styles.inputLabelClr]}>
        Recent searches
      </Text>
      <Pressable
        style={[styles.leftIconGroup, styles.leftIconPosition]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.leftIcon3}
          resizeMode="cover"
          source={require("../assets/-left-icon5.png")}
        />
        <Text style={[styles.electrician, styles.inputLabelTypo]}>
          Electrician
        </Text>
      </Pressable>
      <Pressable
        style={[styles.leftIconContainer, styles.leftIconPosition]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.leftIcon3}
          resizeMode="cover"
          source={require("../assets/-left-icon5.png")}
        />
        <Text style={[styles.electrician, styles.inputLabelTypo]}>Laundry</Text>
      </Pressable>
      <Pressable
        style={[styles.framePressable, styles.leftIconPosition]}
        onPress={() => navigation.navigate("Frame10664")}
      >
        <Image
          style={styles.leftIcon3}
          resizeMode="cover"
          source={require("../assets/-left-icon5.png")}
        />
        <Text style={[styles.electrician, styles.inputLabelTypo]}>
          Carpenter
        </Text>
      </Pressable>
      <View
        style={[styles.keyboardHumanInterfaceGui, styles.statusBarPosition]}
      >
        <View style={styles.zeroSizeWrap}>
          <View style={[styles.content, styles.contentPosition]}>
            <View style={[styles.background, styles.backgroundPosition]}>
              <View style={[styles.background1, styles.backgroundPosition1]} />
            </View>
            <View style={[styles.homeIndicator, styles.contentPosition]}>
              <View
                style={[styles.homeIndicator1, styles.backgroundPosition]}
              />
            </View>
            <View style={styles.keys}>
              <View style={[styles.dictation, styles.emojiFlexBox]}>
                <Image
                  style={styles.dictationIcon}
                  resizeMode="cover"
                  source={require("../assets/dictation.png")}
                />
              </View>
              <View style={[styles.emoji, styles.aPosition]}>
                <Image
                  style={styles.emojiIcon}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.return, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Text style={[styles.label1, styles.labelTypo]}>Return</Text>
              </View>
              <View style={[styles.space, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text style={[styles.label2, styles.labelTypo]}>space</Text>
              </View>
              <View style={[styles.view, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle2.png")}
                />
                <Text style={[styles.label3, styles.labelTypo]}>123</Text>
              </View>
              <View style={[styles.delete, styles.mPosition]}>
                <View style={[styles.keyLight, styles.backgroundPosition1]}>
                  <Image
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle3.png")}
                  />
                  <Text style={[styles.label4, styles.labelTypo]}>{` `}</Text>
                </View>
                <View style={[styles.deleteButton, styles.shift1Position]}>
                  <Image
                    style={styles.deleteButtonIcon}
                    resizeMode="cover"
                    source={require("../assets/delete-button.png")}
                  />
                </View>
              </View>
              <View style={[styles.shift, styles.mPosition]}>
                <View style={[styles.keyLight, styles.backgroundPosition1]}>
                  <View style={styles.rectangleShadowBox} />
                  <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
                </View>
                <View style={[styles.shift1, styles.shift1Position]}>
                  <Image
                    style={styles.shiftIcon}
                    resizeMode="cover"
                    source={require("../assets/shift.png")}
                  />
                </View>
              </View>
              <View style={[styles.m, styles.mPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
              </View>
              <View style={[styles.n, styles.nPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
              </View>
              <View style={[styles.b, styles.bPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
              </View>
              <View style={[styles.v, styles.vPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
              </View>
              <View style={[styles.c, styles.cPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
              </View>
              <View style={[styles.x, styles.xPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
              </View>
              <View style={[styles.z, styles.zPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
              </View>
              <View style={[styles.l, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
              </View>
              <View style={[styles.k, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
              </View>
              <View style={[styles.j, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
              </View>
              <View style={[styles.h, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
              </View>
              <View style={[styles.g, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
              </View>
              <View style={[styles.f, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
              </View>
              <View style={[styles.d, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
              </View>
              <View style={[styles.s, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
              </View>
              <View style={[styles.a, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
              </View>
              <View style={[styles.p, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
              </View>
              <View style={[styles.o, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
              </View>
              <View style={[styles.i, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
              </View>
              <View style={[styles.u, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
              </View>
              <View style={[styles.y, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol21, styles.symbolTypo]}>Y</Text>
              </View>
              <View style={[styles.t, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
              </View>
              <View style={[styles.r, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
              </View>
              <View style={[styles.e, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol21, styles.symbolTypo]}>E</Text>
              </View>
              <View style={[styles.w, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
              </View>
              <View style={[styles.q, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol26, styles.symbolTypo]}>Q</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    position: "absolute",
  },
  leftIconPosition: {
    left: 32,
    position: "absolute",
  },
  fieldSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  inputLabelClr: {
    color: Color.colorGray60,
    textAlign: "left",
  },
  leftIconLayout: {
    height: 18,
    width: 18,
    display: "none",
  },
  inputLabelTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  contentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  backgroundPosition: {
    left: "50%",
    position: "absolute",
  },
  backgroundPosition1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  emojiFlexBox: {
    padding: 11,
    top: "87.4%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  aPosition: {
    left: "5.15%",
    right: "86.18%",
  },
  viewPosition: {
    bottom: "22.14%",
    top: "61.83%",
    height: "16.03%",
    position: "absolute",
  },
  labelTypo: {
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 24,
    fontSize: 18,
    top: "26.19%",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  mPosition: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
  },
  shift1Position: {
    left: "11.9%",
    right: "11.9%",
    width: "76.19%",
    height: "76.19%",
    padding: 11,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: 26,
    top: "50%",
    marginTop: -14.84,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "63.36%",
    top: "20.61%",
    height: "16.03%",
    width: "8.67%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.97%",
    height: "16.03%",
    width: "8.67%",
    top: "0%",
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
    textAlign: "center",
    color: Color.colorGray80,
    letterSpacing: 0,
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
    justifyContent: "flex-end",
    paddingVertical: Padding.p_base,
    top: 0,
    left: 0,
    backgroundColor: Color.lowfiWhite,
  },
  label: {
    fontFamily: FontFamily.typographyTaglineSmallMedium,
    display: "none",
    width: 364,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.colorGray80,
  },
  inputLabel: {
    width: 317,
    marginLeft: 8,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.colorGray60,
  },
  leftIcon1: {
    marginLeft: 8,
  },
  field: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: "#848484",
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
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
  },
  arrowLeftIcon: {
    height: 17,
    width: 17,
  },
  back: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
    color: Color.colorGray70,
    textAlign: "center",
  },
  arrowLeftParent: {
    top: 68,
    alignItems: "center",
    flexDirection: "row",
    left: 32,
  },
  recentSearches: {
    top: 192,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.typographyTaglineSmallRegular_size,
    color: Color.colorGray60,
    left: 32,
    position: "absolute",
  },
  leftIcon3: {
    width: 16,
    height: 16,
  },
  electrician: {
    fontSize: FontSize.typographyParagraphSmallRegular_size,
    marginLeft: 16,
    color: Color.colorGray70,
    textAlign: "left",
  },
  leftIconGroup: {
    top: 224,
    flexDirection: "row",
    left: 32,
  },
  leftIconContainer: {
    top: 259,
    flexDirection: "row",
    left: 32,
  },
  framePressable: {
    top: 294,
    flexDirection: "row",
    left: 32,
  },
  background1: {
    backgroundColor: "rgba(204, 206, 211, 0.9)",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  background: {
    marginLeft: -214,
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: 428,
  },
  homeIndicator1: {
    marginLeft: -75.9,
    bottom: 9,
    borderRadius: 114,
    backgroundColor: Color.black,
    width: 153,
    height: 6,
  },
  homeIndicator: {
    height: 39,
  },
  dictationIcon: {
    height: 29,
    width: 17,
  },
  dictation: {
    height: "12.6%",
    width: "8.94%",
    left: "86.18%",
    right: "4.88%",
    bottom: "0%",
  },
  emojiIcon: {
    width: 31,
    height: 31,
  },
  emoji: {
    height: "12.21%",
    bottom: "0.38%",
    width: "8.67%",
    padding: 11,
    top: "87.4%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleIcon: {
    bottom: -1,
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 5,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  label1: {
    width: 100,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label2: {
    width: 208,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label3: {
    width: 99,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label4: {
    width: 48,
  },
  keyLight: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  deleteButtonIcon: {
    width: 26,
    height: 19,
  },
  deleteButton: {
    top: "11.9%",
    bottom: "11.9%",
  },
  delete: {
    left: "88.62%",
    width: "11.38%",
    top: "41.22%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1.1413333415985107,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    borderRadius: 5,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    width: 22,
    height: 19,
  },
  shift1: {
    top: "9.52%",
    bottom: "14.29%",
  },
  shift: {
    right: "88.62%",
    width: "11.38%",
    top: "41.22%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
    width: "8.67%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  symbol3: {
    left: "28.12%",
  },
  b: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  v: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  c: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  x: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  z: {
    bottom: "42.75%",
    top: "41.22%",
    height: "16.03%",
    position: "absolute",
    width: "8.67%",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    left: "86.45%",
    right: "4.88%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    left: "5.15%",
    right: "86.18%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.62%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  symbol21: {
    left: "28.13%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  symbol26: {
    left: "21.87%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "90.03%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "7.22%",
    left: "0.8%",
    position: "absolute",
  },
  content: {
    height: 332,
    overflow: "hidden",
  },
  zeroSizeWrap: {
    alignSelf: "stretch",
    height: 332,
  },
  keyboardHumanInterfaceGui: {
    top: 594,
    backgroundColor: "#ccced3",
    height: 332,
    width: 428,
  },
  statusBarParent: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lowfiWhite,
  },
});

export default FrameScreen3;
