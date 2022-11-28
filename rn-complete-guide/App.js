import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

// Scrollview render all item at a same time. for short list it good but
// long list like youtube app never use scrollviw. it will slow the app.
export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enterGoal]);
    // courseGoals not garentied to return latels list but below line dose.
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enterGoal },
    ]);
    console.log(courseGoals);
  };

  return (
    // style takes javascript object (key value) in styel={{}}
    <View style={styels.screen}>
      <View style={styels.inputContainer}>
        <TextInput
          placeholder="course Goal"
          style={styels.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        {/* Without () function call it will not call in first load */}
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styels.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styels = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#aaa",
    borderColor: "balck",
    borderWidth: 1,
  },
});
