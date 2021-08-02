import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';
import useTodo from '../hooks/useTodo';
import styles from '../styles';

function TodoDetailsScreen({route}): JSX.Element {
  const navigation = useNavigation();
  const {onRemoveTodoItem} = useTodo();
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity
          style={{
            flex: 3,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back-sharp" size={35} />
        </TouchableOpacity>
        <View
          style={{
            flex: 14,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'NotoSerifKR-Regular', fontSize: 18}}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'NotoSerifKR-Regular', fontSize: 18}}>
            {item.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '40%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View
          style={{
            flex: 1,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              item.beforeImgUri
                ? {uri: item.beforeImgUri}
                : require('../img/before.jpg')
            }
            style={{width: '100%', height: '100%', borderRadius: 5}}
          />
        </View>
        <View
          style={{
            flex: 1,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              item.afterImgUri
                ? {uri: item.afterImgUri}
                : require('../img/after.jpg')
            }
            style={{width: '100%', height: '100%', borderRadius: 5}}
          />
        </View>
      </View>
      <Button
        title="삭제"
        onPress={() => {
          onRemoveTodoItem(item.id);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}

export default TodoDetailsScreen;
