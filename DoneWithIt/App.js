// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";


export default function App() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  console.log("hello there...end");
  // console.log(require('./assets/favicon.png')); // return a referance number

  const handlePress = () => {
    console.log("Text clicked");
  };

  console.log(Dimensions.get("window"));
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Arafat. How are you?</Text>
      {/* <Text numberOfLines={1} onPress={handlePress}>
        Hello there. _ A really rally long text._ A really rally long text._ A
        really rally long text._ A really rally long text._ A really rally long
        text.
      </Text> */}

      <WelcomeScreen/>

      {/* <Image blurRadius={2} source={require("./assets/favicon.png")} /> */}
      <TouchableWithoutFeedback onPress={() => console.log("image Touched")}>
        <Image source={require("./assets/favicon.png")} />
      </TouchableWithoutFeedback>

      {/* Visual opacity change when touch */}
      <TouchableOpacity onPress={() => console.log("Touchable Opacity")}>
        <Image source={require("./assets/favicon.png")} />
      </TouchableOpacity>

      {/* background black when touch */}
      <TouchableHighlight onPress={() => console.log("Touchable Highlight")}>
        <Image source={require("./assets/favicon.png")} />
      </TouchableHighlight>

      {/* background black when touch */}
      <TouchableNativeFeedback
        onPress={() => console.log("Touchable native feedback")}
      >
        <View style={{ width: 200, height: 70, backgroundColor: "#f20" }}>
          {/* <Image source={require("./assets/favicon.png")} /> */}
        </View>
      </TouchableNativeFeedback>

      <Button
        color="orange"
        title="Button"
        onPress={() => alert("Button tapped")}
      />
      {/* Custome alart button */}
      <Button
        color="blue"
        title="Button-2"
        onPress={() =>
          Alert.alert("Title", "messagge", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No" },
          ])
        }
      />

      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: "30%",
          height: landscape ? "5%" : "30%",
        }}
      ></View>

      <View
        style={{
          backgroundColor: "gray",
          flex: 2,
          width: "50%",
          height: "10%",
        }}
      />

      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          width: "50%",
          height: "10%",
          left:20,
          top:10,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
          width: "50%",
          height: "10%",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a9", 
    flexDirection: "column",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
