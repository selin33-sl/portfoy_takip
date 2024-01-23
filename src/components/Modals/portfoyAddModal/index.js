import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addPortfolioProcess, getAllPortfolioProcess} from '../../../api';
import {useToast} from '../../../hooks/useToast';

export const PortfoyAddModal = ({isAddModalVisible, setIsAddModalVisible}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const {status: createPortfolioStatus, message: createPortfolioMessage} =
    useSelector(state => state.createPortfolio);

  console.log('şoşoşoşo', createPortfolioStatus, createPortfolioMessage);

  const handleCreatePortfolio = async () => {
    await dispatch(addPortfolioProcess({name}));
    await dispatch(getAllPortfolioProcess());
    await setIsAddModalVisible(false);
  };

  // useToast(
  //   registerStatus,
  //   resetRegister(),
  //   RegisterMessage,
  //   RegisterMessage,
  //   dispatch,
  // );

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
              value={name}
              onChangeText={setName}
              placeholder={t('portfoyAddModal.writePortfolioName')}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>

          <LinearGradient
            colors={['#150193', '#6354BA']}
            style={style.addPortfoyContainer}>
            <TouchableOpacity onPress={handleCreatePortfolio}>
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
