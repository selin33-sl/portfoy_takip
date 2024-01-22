import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {colors} from '../../../theme';
import {deletePortfolioProcess, getAllPortfolioProcess} from '../../../api';

export const PortfoyListModal = ({
  isModalVisible,
  setIsModalVisible,
  setIsAddModalVisible,
  data,
}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {status: deleteStatus, message: deleteMessage} = useSelector(
    state => state.deletePortfolio,
  );

  const Cart = ({item}) => {
    const handleDeletePortfolio = () => {
      dispatch(deletePortfolioProcess(item?._id));
      dispatch(getAllPortfolioProcess());
    };
    return (
      <View style={style.cartInnerContainer}>
        <View style={style.portfoyNameContainer}>
          <Text style={style.portfoyName}>{item?.name}</Text>
        </View>
        <TouchableOpacity style={style.button}>
          <Icon
            name={'pencil-outline'}
            size={25}
            style={{
              color: colors.black,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeletePortfolio} style={style.button}>
          <Icon
            name={'delete-outline'}
            size={25}
            style={{
              color: 'red',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('itemm:', item);
    console.log(item.id);
    return <Cart item={item} />;
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
                size={32}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.headerContainer}>
            <Text style={style.text}>{t('portfoyListModal.myPortfolio')}</Text>
          </View>
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <LinearGradient
            colors={['#150193', '#6354BA']}
            style={style.addPortfoyContainer}>
            <TouchableOpacity onPress={() => setIsAddModalVisible(true)}>
              <Text style={style.addPortfoyText}>
                {' '}
                + {t('portfoyListModal.addPortfolio')}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Modal>
  );
};
