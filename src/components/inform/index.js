import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import style from './style';

const windowWidth = Dimensions.get('window').width;

export const Inform = ({deger1, deger2, deger3, deger4, deger5, deger6}) => {
  const {t} = useTranslation();
  const Row = ({backgroundColor, text, deger, start, end}) => {
    return (
      <TouchableOpacity
        style={
          start
            ? style.rowContainer
            : end
            ? {...style.rowContainer, justifyContent: 'flex-end'}
            : null
        }>
        {start && (
          <View style={{...style.circle, backgroundColor: backgroundColor}} />
        )}
        <View style={style.textContainer}>
          <Text style={style.text}>{text}</Text>

          <Text
            style={{
              ...style.text,
              marginRight: windowWidth * 0.02,
              fontWeight: '500',
            }}>
            % {deger}
          </Text>
        </View>
        {end && (
          <View style={{...style.circle, backgroundColor: backgroundColor}} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.informContainer}>
      <View style={style.inform}>
        <Row
          start
          backgroundColor={'#3401FF'}
          text={t('headers.assetsHeaders.turkisLira')}
          deger={deger1}
        />
        <Row
          start
          backgroundColor={'#00EFFE'}
          text={t('headers.assetsHeaders.foreignCurrency')}
          deger={deger2}
        />
        <Row
          start
          backgroundColor={'#FF007A'}
          text={t('headers.assetsHeaders.fund')}
          deger={deger3}
        />
      </View>

      <View style={style.inform}>
        <Row
          end
          backgroundColor={'#BCFE00'}
          text={t('headers.assetsHeaders.stock')}
          deger={deger4}
        />
        <Row
          end
          backgroundColor={'#FF7A00'}
          text={t('headers.assetsHeaders.goldSilver')}
          deger={deger5}
        />
        <Row
          end
          backgroundColor={'#DB00FF'}
          text={t('headers.assetsHeaders.cryptoCurrrency')}
          deger={deger6}
        />
      </View>
    </View>
  );
};
