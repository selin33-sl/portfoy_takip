import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const PortfoyAddModal = ({isAddModalVisible, setIsAddModalVisible}) => {
  const {t} = useTranslation();

  return (
    <Modal
      visible={isAddModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsAddModalVisible(false)}>
      <View style={style.container}>
        <LinearGradient
          colors={['#10001D', '#44007A']}
          style={style.innerContainer}>
          <View style={style.iconsContainer}>
            <TouchableOpacity onPress={() => setIsAddModalVisible(false)}>
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
            <Text style={style.text}>{t('portfoyAddModal.newPortfolio')}</Text>
          </View>
          <View style={style.headerContainer}>
            <Text style={style.text1}>
              {t('portfoyAddModal.namePortfolio')}:{' '}
            </Text>
          </View>
          <View style={style.inputContainer}>
            <TextInput
              style={style.textInput}
              placeholder={t('portfoyAddModal.writePortfolioName')}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>

          <LinearGradient
            colors={['#150193', '#6354BA']}
            style={style.addPortfoyContainer}>
            <TouchableOpacity>
              <Text style={style.addPortfoyText}>
                {t('portfoyAddModal.create')}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Modal>
  );
};
