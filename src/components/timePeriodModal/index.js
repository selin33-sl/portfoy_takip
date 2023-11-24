import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import style from './style';

export const TimePeriodModal = ({
  isModalVisible,
  setIsModalVisible,
  selectedItem,
  setSelectedItem,
}) => {
  const data = [
    {
      text: 'Bugün',
    },
    {
      text: 'Son 7 Gün',
    },
    {
      text: 'Son 30 Gün',
    },
    {
      text: 'Son 90 Gün',
    },
    {
      text: 'Son 180 Gün',
    },
    {
      text: 'Son 360 Gün',
    },
    {
      text: 'Bu hafta',
    },
    {
      text: 'Bu Ay',
    },
    {
      text: 'Bu Yıl',
    },
    {
      text: 'Tüm Zamanlar',
    },
  ];

  console.log(selectedItem, 'selectedItem');
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          style.optionContainer,
          {
            backgroundColor:
              selectedItem === item.text ? '#A088B4' : 'transparent',
          },
        ]}
        onPress={() => handleItemPress(item.text)}>
        <Text style={style.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const handleItemPress = text => {
    setSelectedItem(text);

    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={style.container}>
        <LinearGradient
          colors={['#10001D', '#44007A']}
          style={style.innerContainer}>
          <View style={style.iconsContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name={'close'}
                size={25}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.optionsContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
