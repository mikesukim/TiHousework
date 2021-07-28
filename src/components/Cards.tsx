import React from 'react';
import {Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Card} from 'react-native-shadow-cards';

function Cards(): JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#EBE9E0'}}
      forceInset={{top: 'always'}}>
      <View
        style={{
          alignItems: 'center',
          padding: '6%',
        }}>
        <Card
          style={{
            height: 60,
            marginBottom: 20,
            width: '96%',
            justifyContent: 'center',
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 4},
            shadowRadius: 3,
            shadowOpacity: 0.2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoSerifKR-Medium',
              color: '#484848',
            }}>
            설거지 하기
          </Text>
        </Card>
        <Card
          style={{
            height: 60,
            marginBottom: 20,
            width: '96%',
            justifyContent: 'center',
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 4},
            shadowRadius: 3,
            shadowOpacity: 0.2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoSerifKR-Medium',
              color: '#484848',
            }}>
            성심이 산책하기
          </Text>
        </Card>
        <Card
          style={{
            height: 60,
            marginBottom: 20,
            width: '96%',
            justifyContent: 'center',
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 4},
            shadowRadius: 3,
            shadowOpacity: 0.2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'NotoSerifKR-Medium',
              color: '#484848',
            }}>
            화장실 청소하기
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
}

export default Cards;
