import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {colors} from '../../../theme';
import {
  deletePortfolioProcess,
  getAllPortfolioProcess,
  sellAssetProcess,
  updatePortfolioProcess,
} from '../../../api';
import {resetDeletePortfolio} from '../../../redux/slice/portfolio/delete-portfolio-slice';
import {useToast} from '../../../hooks/useToast';
import {resetUpdatePortfolio} from '../../../redux/slice/portfolio/update-portfolio-slice';
import {resetAllPortfolio} from '../../../redux/slice/portfolio/get-all-portfolio-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {savePortfolioId} from '../../../redux/slice/auth/login-slice';
import {Button} from '../../button';
import {AlertModal} from '../alertModal';
import {Loader} from '../../loader';
import {InputContainer} from '../../inputContainer';

export const AssetSellModal = ({isModalVisible, setIsModalVisible}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [miktar1, setMiktar1] = useState('');
  const [miktar2, setMiktar2] = useState('');
  const [fiyat1, setFiyat1] = useState('');
  const [fiyat2, setFiyat2] = useState('');

  const {status: deleteStatus, message: deleteMessage} = useSelector(
    state => state.deletePortfolio,
  );
  const {status: updateStatus, message: updateMessage} = useSelector(
    state => state.updatePortfolio,
  );
  const {isLoading: loading} = useSelector(state => state.getAllPortfolio);
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);

  useToast(
    deleteStatus,
    resetDeletePortfolio(),
    deleteMessage,
    deleteMessage,
    dispatch,
  );

  useToast(
    updateStatus,
    resetUpdatePortfolio(),
    updateMessage,
    updateMessage,
    dispatch,
  );

  // useEffect(() => {
  //   if (deleteStatus && deleteStatus === 'success') {
  //     setIsAlertModalVisible(false);
  //   }
  // }, [deleteStatus]);

  const handleSellAsset = async () => {
    //  await dispatch(sellAssetProcess({portfolioId:defaultPortfolioId,assetId:}))
    setIsAlertModalVisible(false);
  };

  console.log('loadd', loading);

  return (
    <>
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
              <Text style={style.text}>{t('common.sales')}</Text>
            </View>
            <View style={style.inputContainer}>
              <InputContainer
                text={t('assetDetailScreen.amount')}
                typeText={''}
                value1={miktar1}
                onChangeText1={setMiktar1}
                value2={miktar2}
                onChangeText2={setMiktar2}
              />
              <InputContainer
                text={t('assetDetailScreen.price')}
                typeText={'₺'}
                value1={fiyat1}
                onChangeText1={setFiyat1}
                value2={fiyat2}
                onChangeText2={setFiyat2}
              />
            </View>

            <Button
              color1={'#150193'}
              color2={'#6354BA'}
              textStyle={style.addPortfoyText}
              text={t('common.sales')}
              buttonStyle={style.addPortfoyContainer}
              // onPress={() => setIsAddModalVisible(true)}
            />

            {/* {loading ? (
                <Loader />
              ) : (
                <FlatList
                  contentContainerStyle={{flexGrow: 1}}
                  showsVerticalScrollIndicator={false}
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
  
              {list ? null : (
                <Button
                  color1={'#150193'}
                  color2={'#6354BA'}
                  textStyle={style.addPortfoyText}
                  text={`+ ${t('portfoyListModal.addPortfolio')}`}
                  buttonStyle={style.addPortfoyContainer}
                  onPress={() => setIsAddModalVisible(true)}
                />
              )} */}
          </LinearGradient>
        </View>
      </Modal>

      <AlertModal
        handleDelete={handleSellAsset}
        isModalVisible={isAlertModalVisible}
        setIsModalVisible={setIsAlertModalVisible}
      />
    </>
  );
};
