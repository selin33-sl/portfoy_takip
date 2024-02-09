import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {colors} from '../../../theme';
import {
  deletePortfolioProcess,
  getAllPortfolioProcess,
  updatePortfolioProcess,
} from '../../../api';
import {resetDeletePortfolio} from '../../../redux/slice/portfolio/delete-portfolio-slice';
import {useToast} from '../../../hooks/useToast';
import {resetUpdatePortfolio} from '../../../redux/slice/portfolio/update-portfolio-slice';
import {resetAllPortfolio} from '../../../redux/slice/portfolio/get-all-portfolio-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {savePortfolioId} from '../../../redux/slice/auth/login-slice';

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
  const {status: updateStatus, message: updateMessage} = useSelector(
    state => state.updatePortfolio,
  );

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

  const Cart = ({item}) => {
    const handleDeletePortfolio = async () => {
      await dispatch(deletePortfolioProcess(item?._id));
      await dispatch(getAllPortfolioProcess());
    };
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(item?.name);

    const handleEditToggle = () => {
      setIsEditing(true);
    };

    const handleSaveChanges = async () => {
      if (isEditing) {
        await dispatch(
          updatePortfolioProcess({id: item?._id, data: {name: editedName}}),
        );
        await dispatch(resetAllPortfolio());
        await dispatch(getAllPortfolioProcess());

        await setIsEditing(false);
      }
    };
    const handleNameChange = text => {
      setEditedName(text);
    };

    const handleSelectPortfolio = async () => {
      // await AsyncStorage.setItem('selectedPortfolioId', item?._id);
      await dispatch(savePortfolioId(item?._id));
      await setIsModalVisible(false);
    };
    return (
      <TouchableOpacity
        style={style.cartInnerContainer}
        onPress={handleSelectPortfolio}>
        <View style={style.portfoyNameContainer}>
          <TextInput
            style={style.portfoyName}
            value={editedName}
            onChangeText={handleNameChange}
            editable={isEditing}
          />
        </View>
        <TouchableOpacity
          onPress={isEditing ? handleSaveChanges : handleEditToggle}
          style={style.button}>
          <Icon
            name={isEditing ? 'check' : 'pencil-outline'}
            size={25}
            style={{
              color: isEditing ? colors.green : colors.black,
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
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
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
