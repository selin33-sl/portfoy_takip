import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Loader} from '../../loader';

export const AssetInfoModal = ({isModalVisible, setIsModalVisible, item}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {isLoading: AssetDetailsLoading} = useSelector(
    state => state.getAssetDetails,
  );

  console.log('AssetDetailsLoading:', AssetDetailsLoading);

  const [name, setName] = useState('');

  const Row = ({text1, text2}) => {
    return (
      <View style={style.rowContainer}>
        <Text style={style.textRow}>{text1}</Text>
        <Text style={{...style.textRow, fontWeight: '500'}}>{text2}</Text>
      </View>
    );
  };

  useEffect(() => {
    if (item) {
      const words = item?.name.split(' ');
      const name = words[0] ? words[0].trim() : '';
      setName(name);
    }
  }, [item]);

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={style.container}>
        {AssetDetailsLoading ? (
          <Loader />
        ) : (
          <LinearGradient
            colors={['#10001D', '#44007A']}
            style={style.innerContainer}>
            <View style={style.iconsContainer}>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon
                  name={'close'}
                  size={32}
                  style={{
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={style.headerContainer}>
              <Text style={style.text}>{name}</Text>
            </View>
            <View style={style.textContainer}>
              <Row text1={'Toplam: '} text2={`${item?.totalAssetValue} TL`} />
              <Row text1={'Miktar: '} text2={item?.quantity} />
              <Row text1={'Adet Fiyatı: '} text2={`${item?.lastPrice} TL`} />
              <Row
                text1={'Ortalama Maliyet: '}
                text2={`${item?.purchasePrice} TL`}
              />
            </View>
          </LinearGradient>
        )}
      </View>
    </Modal>
  );
};
