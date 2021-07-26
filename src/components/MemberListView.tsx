import React, {useImperativeHandle, useState} from 'react';
import {useRef} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';

function MemberListView({callbackFromParent}): JSX.Element {
  const [selectedId, setSelectedId] = useState(null);
  const profile = [
    {
      id: '1',
      name: 'Jiyun',
      src: require('../img/jiyun.jpg'),
    },
    {
      id: '2',
      name: 'Michael',
      src: require('../img/mike.jpg'),
    },
    {
      id: '3',
      name: 'Yunho',
      src: require('../img/logojiyun.png'),
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
  const Item = ({name, item, src}) => {
    const tempChildComp = useRef();
    const handle = () => {
      tempChildComp.current.hi();
    };
    return (
      <>
        <TouchableOpacity
          onPress={handle}
          style={{
            height: 76,
            width: 76,
            marginLeft: 10,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={src}
            style={[
              {
                width: 70,
                height: 70,
                borderRadius: 40,
                zIndex: 2,
              },
            ]}
          />
          <TempView ref={tempChildComp} />
        </TouchableOpacity>
      </>
    );
  };
  const TempView = React.forwardRef((props, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    useImperativeHandle(ref, () => ({
      hi() {
        setIsClicked(state => !state);
      },
    }));
    // item.id === redux
    if (isClicked) {
      return (
        <View
          style={{
            backgroundColor: 'red',
            height: 76,
            width: 76,
            position: 'absolute',
            borderRadius: 40,
            zIndex: 1,
          }}
        />
      );
    }
    return null;
  });
  const renderItem = ({item}) => {
    console.log(item.id);
    return <Item name={item.name} item={item} src={item.src} />;
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
