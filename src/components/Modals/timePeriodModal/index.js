import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import style from './style';

export const TimePeriodModal = ({
  isModalVisible,
  setIsModalVisible,
  selectedItem,
  setSelectedItem,
  setSelectedValue,
}) => {
  const {t} = useTranslation();

  const data = [
    {
      text: t('timePeriodModal.today'),
      value: 2,
    },
    {
      text: t('timePeriodModal.last7days'),
      value: 7,
    },
    {
      text: t('timePeriodModal.last30days'),
      value: 30,
    },
    {
      text: t('timePeriodModal.last90days'),
      value: 90,
    },

    {
      text: t('timePeriodModal.allTime'),
      value: 90,
    },
  ];

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
    const selectedValue = data.find(item => item.text === text)?.value;
    setSelectedValue(selectedValue);

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
