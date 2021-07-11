import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function FMLiveCom(): JSX.Element {
  const [state, setState] = useState('initial state');

  const styles = StyleSheet.create({
    userStatus: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    userImage1: {
      width: 50,
      height: 50,
    },
    userImage2: {
      width: 50,
      height: 50,
    },
    userImage3: {
      width: 50,
      height: 50,
    },
    userImage4: {
      width: 50,
      height: 50,
    },
  });

  function FMLiveRender(props) {
    const numOfUser = props.userNum
    if (numOfUser === 4) {
      return (
        <View style={styles.userStatus}>
          <Image
            source={require('../../assets/userImage/pngegg-1.png')}
            style={styles.userImage1}
          />
          <Image
            source={require('../../assets/userImage/pngegg-2.png')}
            style={styles.userImage2}
          />
          <Image
            source={require('../../assets/userImage/pngegg-3.png')}
            style={styles.userImage3}
          />
          <Image
            source={require('../../assets/userImage/pngegg-4.png')}
            style={styles.userImage4}
          />
        </View>
      );
    }

    if (numOfUser === 3) {
      return (
        <View style={styles.userStatus}>
          <Image
            source={require('../../assets/userImage/pngegg-1.png')}
            style={styles.userImage1}
          />
          <Image
            source={require('../../assets/userImage/pngegg-2.png')}
            style={styles.userImage2}
          />
          <Image
            source={require('../../assets/userImage/pngegg-3.png')}
            style={styles.userImage3}
          />
        </View>
      );
    }
    if (numOfUser === 2) {
      return (
        <View style={styles.userStatus}>
          <Image
            source={require('../../assets/userImage/pngegg-1.png')}
            style={styles.userImage1}
          />
          <Image
            source={require('../../assets/userImage/pngegg-2.png')}
            style={styles.userImage2}
          />
        </View>
      );
    }
    return (
      <View style={styles.userStatus}>
        <Image
          source={require('../../assets/userImage/pngegg-1.png')}
          style={styles.userImage1}
        />
      </View>
    );
  }

  return <FMLiveRender userNum={1} />;
}

export default FMLiveCom;
