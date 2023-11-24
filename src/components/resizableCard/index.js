import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

const windowHeight = Dimensions.get('window').height;
export const ResizableCard = ({borderColor, tür, hidden, sendItem}) => {
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [modalHeight, setModalHeight] = useState(windowHeight * 0.08); // Modalın başlangıç yüksekliği
  const numItems = sendItem.length;
  const toggleModal = () => {
    if (isModalVisible2) {
      // Modal kapanırken yüksekliği sıfırla
      setModalHeight(windowHeight * 0.08);
    }
    setModalVisible2(!isModalVisible2);
  };

  const expandModal = () => {
    // Modalı açarken yüksekliği artır
    const newHeight = windowHeight * 0.08 + numItems * windowHeight * 0.08; // Örnek bir formül, ihtiyaca göre ayarlayabilirsiniz
    setModalHeight(newHeight);
    toggleModal();
    setModalVisible2(!isModalVisible2);
  };

  const SmallCard = ({name, price, adet}) => {
    return (
      <TouchableOpacity style={style.detailContainer}>
        <View style={style.detail}>
          <Text style={style.textDetailName}>{name}</Text>
          <Text style={style.textDetailPrice}>
            {hidden ? '****' : price} TL
          </Text>
        </View>
        <Text style={style.textDetailNumber}>
          {hidden ? '****' : adet} Adet
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    console.log(item, 'itemmmmmmmmm');
    return <SmallCard name={item.name} price={item.price} adet={item.adet} />;
  };

  return (
    <LinearGradient
      colors={['#10001D', '#44007A']}
      style={{
        ...style.container,
        borderColor: borderColor,
        height: isModalVisible2 ? toggleModal : expandModal,
      }}>
      <View
        style={{
          ...style.innerContainer,
          height: modalHeight,
        }}>
        <View style={style.halfContainer}>
          <Text style={style.text}>{tür}</Text>
          <TouchableOpacity
            style={style.button}
            onPress={isModalVisible2 ? toggleModal : expandModal}>
            <Icon
              name={isModalVisible2 ? 'chevron-up' : 'chevron-down'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        {isModalVisible2 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={sendItem}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </LinearGradient>
  );
};
