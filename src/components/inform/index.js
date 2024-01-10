import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import style from './style';

export const Inform = ({deger1, deger2, deger3, deger4, deger5, deger6}) => {
  const {t} = useTranslation();
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
        <Row
          backgroundColor={'#3401FF'}
          text={t('headers.assetsHeaders.turkisLira')}
          deger={deger1}
        />
        <Row
          backgroundColor={'#00EFFE'}
          text={t('headers.assetsHeaders.foreignCurrency')}
          deger={deger2}
        />
        <Row
          backgroundColor={'#FF007A'}
          text={t('headers.assetsHeaders.fund')}
          deger={deger3}
        />
      </View>

      <View style={style.inform}>
        <Row
          backgroundColor={'#BCFE00'}
          text={t('headers.assetsHeaders.stock')}
          deger={deger4}
        />
        <Row
          backgroundColor={'#FF7A00'}
          text={t('headers.assetsHeaders.goldSilverCommodity')}
          deger={deger5}
        />
        <Row
          backgroundColor={'#DB00FF'}
          text={t('headers.assetsHeaders.cryptoCurrrency')}
          deger={deger6}
        />
      </View>
    </View>
  );
};
