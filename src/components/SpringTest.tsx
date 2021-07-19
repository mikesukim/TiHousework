import {
  animated,
  config,
  useSpring,
  useTrail,
  useTransition,
} from '@react-spring/native';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  AnimatedText,
  Header1,
  Header2,
  View1,
  View2,
} from '../styled-components/StyledComps';

// function SpringTest(): JSX.Element {
//   // const [flip, set] = useState(false);
//   const [showA, setShowA] = useState(false);
//   const fadeStyles = useSpring({
//     to: {opacity: 1},
//     from: {opacity: 0},
//     // reset: true,
//     // reverse: flip,
//     // delay: 2000,
//     // config: config.molasses,
//     // onRest: () => set(!flip),
//   });

//   return (
//     <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
//       <Text>HIII</Text>
//       <AnimatedText style={fadeStyles}>Byeee</AnimatedText>
//       <Button title="click" onPress={() => setShowA(val => !val)} />
//     </SafeAreaView>
//   );
// }

// function SpringTest(): JSX.Element {
//   const [flip, set] = useState(false);
//   const props = useSpring({
//     to: {opacity: 1, color: 'red'},
//     from: {opacity: 0, color: 'yellow'},
//     reset: true,
//     // reverse: flip,
//     delay: 1000,
//     config: config.molasses,
//     // onRest: () => set(!flip),
//   });

//   return (
//     <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
//       <Header1>
//         <animated.Text style={props}>hello</animated.Text>
//       </Header1>
//     </SafeAreaView>
//   );
// }

// export default SpringTest;

// function SpringTest(): JSX.Element {
//   const items = [
//     {text: 'Hello Michael', id: 1},
//     {text: 'From', id: 2},
//     {text: 'Lovely Wife Noh', id: 3},
//   ];
//   const trail = useTrail(items.length, {
//     config: {
//       duration: 1000,
//     },
//     opacity: 1,
//     from: {opacity: 0},
//     delay: 1000,
//   });

//   return (
//     <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
//       <View2>
//         {trail.map((props, i) => (
//           <Header1>
//             <animated.Text style={props} key={i}>
//               {items[i].text}
//             </animated.Text>
//           </Header1>
//         ))}
//       </View2>
//     </SafeAreaView>
//   );
// }

// export default SpringTest;

function SpringTest(): JSX.Element {
  const [isClick, setIsClick] = useState(false);
  const items = isClick
    ? [
        {text: 'Hello Michael', id: 1},
        {text: 'From', id: 2},
        {text: 'Lovely Wife Noh', id: 3},
      ]
    : [];
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      scale: 0.93,
    },
    enter: (msg, i) => ({
      delay: () => {
        return i * 1500;
      },
      opacity: 1,
      scale: 1,
    }),
  });

  const msgs = transitions((style, msg) => {
    return (
      <Header2>
        <animated.Text key={msg} style={style}>
          {msg.text}
        </animated.Text>
      </Header2>
    );
  });

  useEffect(() => {
    setIsClick(true);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <View2>
        {/* <Button title="Click" onPress={() => setIsClick(true)} /> */}
        {msgs}
      </View2>
    </SafeAreaView>
  );
}

export default SpringTest;
