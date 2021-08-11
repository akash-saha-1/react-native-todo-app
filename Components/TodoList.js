import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Todo from './Todo';

const TodoList = () => {
  const [title, setTile] = useState('Todo List');
  const [text, setText] = useState('');
  const [list, setList] = useState(['Hello World']);

  //Add item method
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText('');
  };

  //Delete item method
  const deleteItem = (item) => {
    const updatedList = list.filter((todo) => todo !== item);
    setList(updatedList);
  };

  return (
    <View style={{ width: '80%', marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((item, index) => (
          <Todo key={index} item={item} delete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: 'center',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 4,
    padding: 4,
  },
});

export default TodoList;
