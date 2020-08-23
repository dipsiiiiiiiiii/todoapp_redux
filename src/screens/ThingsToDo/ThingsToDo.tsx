import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { deleteToDo, toggleToDo } from "../../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/modules";
import TodoList from "../../components/TodoList";

export default function ThingsToDo() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onToggle = (id: number) => {
    dispatch(toggleToDo(id));
  };

  const onRemove = (id: number) => {
    dispatch(deleteToDo(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>오늘의 할 일 목록</Text>
      <TodoList onToggle={onToggle} onRemove={onRemove} todos={todos} />
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
});
