import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addPortfolioProcess, getAllPortfolioProcess} from '../../../api';
import {useToast} from '../../../hooks/useToast';
import {colors} from '../../../theme';
import {Button} from '../../button';

export const PortfoyAddModal = ({isAddModalVisible, setIsAddModalVisible}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const {status: createPortfolioStatus, message: createPortfolioMessage} =
    useSelector(state => state.createPortfolio);

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
          <TextInput
            style={style.textInput}
            value={name}
            onChangeText={setName}
            placeholder={t('portfoyAddModal.writePortfolioName')}
            placeholderTextColor={'grey'}
          />
          <Button
            color1={'#150193'}
            color2={'#6354BA'}
            textStyle={style.addPortfoyText}
            text={t('portfoyAddModal.create')}
            buttonStyle={style.addPortfoyContainer}
            onPress={() => handleCreatePortfolio()}
          />
          {/* <TouchableOpacity onPress={handleCreatePortfolio}>
            <LinearGradient
              colors={['#150193', '#6354BA']}
              style={style.addPortfoyContainer}>
              <Text style={style.addPortfoyText}>
                {t('portfoyAddModal.create')}
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </LinearGradient>
      </View>
    </Modal>
  );
};
