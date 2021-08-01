import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import useTodo from '../hooks/useTodo';
import styles from '../styles';

function ArrayStateTest(): JSX.Element {
  const {todoItem, onAddTodoItem, onRemoveTodoItem} = useTodo();
  const [title, onChangeTitle] = useState('');

  const onRemoveItem = item => {
    onRemoveTodoItem(item.id);
  };
  // const onUpdateItem = () => {
  //   setList(list => {
  //     return list.map(item => item + 1);
  //   });
  // };
  const addNewItem = text => {
    onAddTodoItem([
      {
        id: Math.random(),
        title: text,
        name: '지윤',
        done: false,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <View>
        {todoItem.map(item => {
          return (
            <>
              <Text key={item.id}>{item.title}</Text>
              <Button
                key={item.id + 1}
                title="remove"
                onPress={() => {
                  onRemoveItem(item);
                }}
              />
            </>
          );
        })}
        <TextInput
          placeholder="useless placeholder"
          onChangeText={onChangeTitle}
          value={title}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button
          title="send"
          onPress={() => {
            addNewItem(title);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default ArrayStateTest;
