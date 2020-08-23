import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { addToDo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";

export default function AddToDo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onInsert = () => {
    dispatch(addToDo(todoText));
    setTodoText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요."
          onChangeText={(text) => setTodoText(text)}
          value={todoText}
        />
        <TouchableOpacity onPress={onInsert} style={styles.addBtn}>
          <Text>추가</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    width: 200,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 16,
    padding: 4,
  },
});
