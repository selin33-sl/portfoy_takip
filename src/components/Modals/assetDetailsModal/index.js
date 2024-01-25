import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import style from './style';
import {colors} from '../../../theme';

export const AssetDetailsModal = ({
  isAssetDetailsModal,
  setIsAssetDetailsModal,
  header,
  color,
}) => {
  const data = [
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.5,
      pertange: '%80',
      _id: 1,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.5,
      pertange: '%80',
      _id: 2,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.7,
      pertange: '%100',
      _id: 3,
    },

    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 5,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 6,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 7,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 8,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 9,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 10,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 11,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 12,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%80',
      _id: 13,
    },
    {
      type: 'HEKTAS',
      quantity: '1000',
      progress: 0.3,
      pertange: '%50',
      _id: 14,
    },
  ];

  const Card = ({type, quantity, progress, pertange}) => {
    return (
      <View style={style.cardContainer}>
        <View style={style.textContainer}>
          <Text style={style.textType}>{type}</Text>
          <Text style={style.textQuantity}>{quantity} Adet</Text>
        </View>
        <View style={style.progressBarContainer}>
          <View style={style.progressBar}>
            <ProgressBar progress={progress} color={color} />
          </View>
          <Text style={style.textPercentage}>{pertange}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Card
        type={item?.type}
        quantity={item?.quantity}
        progress={item?.progress}
        pertange={item?.pertange}
      />
    );
  };

  return (
    <Modal
      visible={isAssetDetailsModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsAssetDetailsModal(false)}>
      <View style={style.container}>
        <LinearGradient
          colors={['#10001D', '#44007A']}
          style={style.innerContainer}>
          <View style={style.iconsContainer}>
            <Text style={style.textHeader}>{header}</Text>
            <TouchableOpacity onPress={() => setIsAssetDetailsModal(false)}>
              <Icon
                name={'close'}
                size={32}
                style={{
                  color: colors.white,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.listContainer}>
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
