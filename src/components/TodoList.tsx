import { FlatList, View } from "react-native";

import React from "react";
import { Todo } from "../redux/modules/todos";
import TodoItem from "../components/TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TodoItem
          key={item.id}
          todo={item}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
    />
  );
}
