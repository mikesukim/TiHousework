import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';
import ThreedotsModal from '../components/ThreedotsModal';
import styles from '../styles';

function TodoDetailsScreen({route}): JSX.Element {
  const navigation = useNavigation();
  const [isDotsClicked, setIsDotsClicked] = useState(false);
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      {isDotsClicked ? <View style={styles.greyOutView} /> : null}
      <View style={styles.detailScreenTopBar}>
        <TouchableOpacity
          style={styles.detailScreenSmallBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back-sharp" size={35} />
        </TouchableOpacity>
        <View style={styles.detailScreenTitle}>
          <Text style={{fontFamily: 'NotoSerifKR-Regular', fontSize: 18}}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.detailScreenSmallBtn}
          onPress={() => {
            setIsDotsClicked(true);
          }}>
          <Icon name="ellipsis-horizontal" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailScreenImgViewWrapper}>
        <View style={styles.detailScreenImgView}>
          <Image
            source={
              item.beforeImgUri
                ? {uri: item.beforeImgUri}
                : require('../img/before.jpg')
            }
            style={styles.detailScreenImg}
          />
        </View>
        <View style={styles.detailScreenImgView}>
          <Image
            source={
              item.afterImgUri
                ? {uri: item.afterImgUri}
                : require('../img/after.jpg')
            }
            style={styles.detailScreenImg}
          />
        </View>
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
      <ThreedotsModal
        isDotsClicked={isDotsClicked}
        setIsDotsClicked={setIsDotsClicked}
        item={item}
      />
    </SafeAreaView>
  );
}

export default TodoDetailsScreen;
