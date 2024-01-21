import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
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
  data,
}) => {
  const {t} = useTranslation();

  const Cart = ({text}) => {
    return (
      <TouchableOpacity style={style.cartInnerContainer}>
        <View style={style.portfoyNameContainer}>
          <Text style={style.portfoyName}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return <Cart text={item?.name} />;
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
      {/* <PortfoyAddModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
      /> */}
    </Modal>
  );
};
