import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

function MemberListView({callbackFromParent}): JSX.Element {
  const [selectedId, setSelectedId] = useState(null);
  const profile = [
    {
      id: '1',
      name: 'Jiyun',
      src: require('../img/11.jpeg'),
    },
    {
      id: '2',
      name: 'Michael',
      src: require('../img/cannotFind.png'),
    },
    {
      id: '3',
      name: 'Yunho',
      src: require('../img/refer.png'),
    },
    {
      id: '4',
      name: 'Jack',
      src: require('../img/welcome.jpeg'),
    },
    {
      id: '5',
      name: 'Sam',
      src: require('../img/11.jpeg'),
    },
  ];
  const Item = ({name, onPress, borderColor, borderWidth, src}) => {
    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 80,
            width: 80,
            marginLeft: 10,
            borderRadius: 40,
          }}>
          <Image
            source={src}
            style={[
              {width: 80, height: 80, borderRadius: 40},
              borderColor,
              borderWidth,
            ]}
          />
        </TouchableOpacity>
      </>
    );
  };
  const renderItem = ({item}) => {
    const borderColor = item.id === selectedId ? 'red' : null;
    const borderWidth = item.id === selectedId ? 2 : null;
    return (
      <Item
        name={item.name}
        onPress={() => {
          setSelectedId(item.id);
          callbackFromParent(item.name);
        }}
        borderColor={{borderColor}}
        borderWidth={{borderWidth}}
        src={item.src}
      />
    );
  };

  return (
    <FlatList
      style={{height: 100, flexGrow: 0}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={profile}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
}

export default MemberListView;
