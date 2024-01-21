import React from 'react';
import {FlatList, Modal, TouchableOpacity, View} from 'react-native';
import {PortfoyListModal} from '../Modals/portfoyListModal';
import {PortfoyAddModal} from '../Modals/portfoyAddModal';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

export const PortfoyComponent = ({
  isListModalVisible,
  setIsListModalVisible,
  isAddModalVisible,
  setIsAddModalVisible,
  data,
}) => {
  return (
    <>
      {isListModalVisible && (
        <PortfoyListModal
          data={data}
          isListModalVisible={isListModalVisible}
          setIsModalVisible={setIsListModalVisible}
          isAddModalVisible={isAddModalVisible}
          setIsAddModalVisible={setIsAddModalVisible}
        />
      )}
      {isAddModalVisible && (
        <PortfoyAddModal
          isAddModalVisible={isAddModalVisible}
          setIsAddModalVisible={setIsAddModalVisible}
        />
      )}
    </>
  );
};
