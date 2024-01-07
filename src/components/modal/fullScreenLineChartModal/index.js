import {View, Text, Modal, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LineChartt} from '../../cards/lineChart';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation-locker';

export const FullScreenLineChartModal = ({
  isAddModalVisible,
  setIsAddModalVisible,
  lcData,
}) => {
  const [allowLandscape, setAllowLandscape] = useState(false);

  useEffect(() => {
    if (allowLandscape) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  }, [allowLandscape]);

  const closeModal = () => {
    setAllowLandscape(false); // Disable landscape orientation
    setIsAddModalVisible(false);
  };

  // Enable landscape orientation when modal is open
  useEffect(() => {
    if (isAddModalVisible) {
      setAllowLandscape(true);
    }
  }, [isAddModalVisible]);

  return (
    <Modal
      visible={isAddModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}>
      <LinearGradient colors={['#44007A', '#10001D']}>
        <View style={style.header}>
          <Text style={style.headerText}>USD</Text>
          <TouchableOpacity onPress={closeModal}>
            <Icon name={'close'} size={30} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={style.lineChartContainer}>
          <LineChartt lcData={lcData} width={700} height={220} />
        </View>
      </LinearGradient>
    </Modal>
  );
};
