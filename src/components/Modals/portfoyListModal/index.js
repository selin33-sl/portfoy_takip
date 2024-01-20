import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {PortfoyAddModal} from '../portfoyAddModal';
import {colors} from '../../../theme';

export const PortfoyListModal = ({
  isModalVisible,
  setIsModalVisible,
  isAddModalVisible,
  setIsAddModalVisible,
}) => {
  const {t} = useTranslation();

  const Cart = () => {
    return (
      <TouchableOpacity style={style.cartContainer}>
        <View style={style.cartInnerContainer}>
          <View style={style.portfoyNameContainer}>
            <Text style={style.portfoyName}>Portföy_1</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
            <TouchableOpacity>
              <Icon
                name={'cog-outline'}
                size={30}
                style={{
                  color: colors.white,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name={'close'}
                size={32}
                style={{
                  color: colors.white,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.headerContainer}>
            <Text style={style.text}>{t('portfoyListModal.myPortfolio')}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </ScrollView>

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
      <PortfoyAddModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
      />
    </Modal>
  );
};
