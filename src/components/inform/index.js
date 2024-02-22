import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import style from './style';
import {useDispatch} from 'react-redux';
import {setInformSelectedHeader} from '../../redux/slice/global/inform-selected-header-slice';

const windowWidth = Dimensions.get('window').width;

export const Inform = ({
  deger1,
  deger2,
  deger3,
  deger4,
  deger5,
  deger6,
  borderColor1,
  borderColor2,
  borderColor3,
  borderColor4,
  borderColor5,
  borderColor6,
  onPress,
  especial,
  setHeaderCallback,
  setColorCallback,
  setDegerCallback,
}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [clickedRow, setClickedRow] = useState(null);

  const Row = ({backgroundColor, text, deger, start, end}) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          await dispatch(setInformSelectedHeader({data: text}));
          setClickedRow({
            start,
            end,
            backgroundColor,
            text,
            deger,
          });
          setColorCallback(backgroundColor);
          setDegerCallback(deger);
          setHeaderCallback(text);
          onPress();
        }}
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
      {especial ? (
        <Row
          start={clickedRow?.start}
          end={clickedRow?.end}
          backgroundColor={clickedRow?.backgroundColor}
          text={clickedRow?.text}
          deger={clickedRow?.deger}
        />
      ) : (
        <>
          <View style={style.inform}>
            <Row
              start
              backgroundColor={borderColor1}
              text={t('headers.assetsHeaders.turkisLira')}
              deger={deger1}
            />
            <Row
              start
              backgroundColor={borderColor2}
              text={t('headers.assetsHeaders.foreignCurrency')}
              deger={deger2}
            />
            <Row
              start
              backgroundColor={borderColor3}
              text={t('headers.assetsHeaders.fund')}
              deger={deger3}
            />
          </View>

          <View style={style.inform}>
            <Row
              end
              backgroundColor={borderColor4}
              text={t('headers.assetsHeaders.stock')}
              deger={deger4}
            />
            <Row
              end
              backgroundColor={borderColor5}
              text={t('headers.assetsHeaders.goldSilver')}
              deger={deger5}
            />
            <Row
              end
              backgroundColor={borderColor6}
              text={t('headers.assetsHeaders.cryptoCurrrency')}
              deger={deger6}
            />
          </View>
        </>
      )}
    </View>
  );
};
