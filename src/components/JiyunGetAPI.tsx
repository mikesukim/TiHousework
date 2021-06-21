import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import axios from 'axios';

function JiyunGetAPI(): JSX.Element {
  const [state, setState] = useState('No Message');
  const endpoint =
    'https://rsmz180w6a.execute-api.ap-northeast-2.amazonaws.com/dev/hello';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBhYWEuY29tIiwiaWF0IjoxNjIyNTc2OTIwLCJleHAiOjQ3NzgzMzY5MjB9.NO9XqWHG0uVAjLHpwZijAbR_-56-dzNBXdf6rPAjYQU';
  function HelloWorld() {
    return new Promise((resolve, reject) => {
      axios
        .get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          resolve(response);
          // console.log(response.status);
          setState(response.data.message);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  return (
    <View>
      <Button title="Click" onPress={() => HelloWorld()} />
      <Text>{state}</Text>
    </View>
  );
}

export default JiyunGetAPI;
