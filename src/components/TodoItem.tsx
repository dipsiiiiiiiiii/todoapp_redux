import { StyleSheet, Text, TouchableOpacity } from "react-native";

import React from "react";

interface Props {
  id: number;
  content: string;
  done: boolean;
}

export default function TodoItem({ id, content, done }: Props) {
  return (
    <TouchableOpacity style={styles.container} key={id}>
      <Text style={{ textDecorationLine: done ? "line-through" : "none" }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
