import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

const windowHeight = Dimensions.get('window').height;
export const ResizableCard = ({borderColor, tür, name, price, adet}) => {
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [modalHeight, setModalHeight] = useState(windowHeight * 0.08); // Modalın başlangıç yüksekliği

  const toggleModal = () => {
    if (isModalVisible2) {
      // Modal kapanırken yüksekliği sıfırla
      setModalHeight(windowHeight * 0.08);
    }
    setModalVisible2(!isModalVisible2);
  };

  const expandModal = () => {
    // Modalı açarken yüksekliği artır
    setModalHeight(windowHeight * 0.15); // İstediğiniz yüksekliği ayarlayabilirsiniz
    toggleModal();
  };

  return (
    <LinearGradient
      colors={['#10001D', '#44007A']}
      style={{
        ...style.container,
        borderColor: borderColor,
        height: isModalVisible2 ? toggleModal : expandModal,
      }}>
      <TouchableOpacity
        onPress={isModalVisible2 ? toggleModal : expandModal}
        style={{
          ...style.innerContainer,
          height: modalHeight,
        }}>
        <View style={style.halfContainer}>
          <Text style={style.text}>{tür}</Text>
          <View style={style.button}>
            <Icon
              name={isModalVisible2 ? 'chevron-up' : 'chevron-down'}
              size={30}
              color={'white'}
            />
          </View>
        </View>
        {isModalVisible2 && (
          <View style={style.detailContainer}>
            <View style={style.detail}>
              <Text style={style.textDetailName}>{name}</Text>
              <Text style={style.textDetailPrice}>{price} TL</Text>
            </View>
            <Text style={style.textDetailNumber}>{adet} Adet</Text>
          </View>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};
