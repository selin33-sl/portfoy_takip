import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

export const Inform = ({deger1, deger2, deger3, deger4, deger5, deger6}) => {
  const Row = ({backgroundColor, text, deger}) => {
    return (
      <View style={style.rowContainer}>
        <View style={{...style.circle, backgroundColor: backgroundColor}} />
        <View style={style.textContainer}>
          <Text style={style.text}>{text}</Text>
          <Text style={style.text}>% {deger}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={style.informContainer}>
      <View style={style.inform}>
        <Row backgroundColor={'#3401FF'} text={'Nakit'} deger={deger1} />
        <Row backgroundColor={'#00EFFE'} text={'Döviz'} deger={deger2} />
        <Row backgroundColor={'#FF007A'} text={'Fon'} deger={deger3} />
      </View>

      <View style={style.inform}>
        <Row backgroundColor={'#BCFE00'} text={'Hisse Senedi'} deger={deger4} />
        <Row
          backgroundColor={'#FF7A00'}
          text={'Altın | Gümüş'}
          deger={deger5}
        />
        <Row backgroundColor={'#DB00FF'} text={'Kripto Para'} deger={deger6} />
      </View>
    </View>
  );
};
