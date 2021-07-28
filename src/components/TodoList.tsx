import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

function TodoList(): JSX.Element {
  const todolist = [
    {
      id: '0',
      title: '설거지 하기',
    },
    {
      id: '1',
      title: '성심이 산책시키기',
    },
    {
      id: '2',
      title: '화장실 청소하기',
    },
  ];

  const Item = ({title}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 60,
            width: '84%',
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 5,
            shadowColor: '#000000',
            shadowRadius: 3,
            shadowOpacity: 0.2,
            shadowOffset: {width: 2, height: 4},
            backgroundColor: 'white',
          }}>
          <Text style={{fontFamily: 'NotoSerifKR-SemiBold'}}>{title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderItem = ({item}) => {
    return <Item title={item.title} />;
  };

  return (
    <>
      <FlatList
        style={{paddingTop: 40}}
        showsVerticalScrollIndicator={false}
        data={todolist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </>
  );
}

export default TodoList;
