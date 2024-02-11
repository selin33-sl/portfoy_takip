import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../theme';
import {NotFound} from '../../notFound';

export const AssetDetailsModal = ({
  isAssetDetailsModal,
  setIsAssetDetailsModal,
  header,
  color,
}) => {
  const {data: AssetPercentageData} = useSelector(
    state => state.getAssetPercentages,
  );

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
          <Text style={style.textPercentage}>%{pertange}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Card
        type={item?.name}
        quantity={item?.quantity}
        progress={item?.progressBar}
        pertange={item?.percentage}
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
            {AssetPercentageData?.length === 0 ? (
              <NotFound
                text={'Portföyünüzde herhangi bir varlık bulunmamaktadır.'}
              />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={AssetPercentageData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
