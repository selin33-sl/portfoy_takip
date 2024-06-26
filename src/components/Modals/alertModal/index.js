import {View, Text, Modal, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import {Button} from '../../button';

export const AlertModal = ({
  isModalVisible,
  setIsModalVisible,
  handle,
  modalBuy,
}) => {
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
          {/* <View style={style.iconsContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name={'close'}
                size={25}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View> */}
          <View style={style.optionsContainer}>
            <View style={style.warningContainer}>
              <Icon name={'alert'} color={'white'} size={18} />
              <Text style={style.warningText}>UYARI</Text>
            </View>
            <Text style={style.alertText}>
              Bu varlığı portföyünüzden silmek istediğinize emin misiniz?
            </Text>
            <View style={style.buttonContainer}>
              <Button
                color1={'red'}
                color2={'#FF4F4F'}
                text={'İptal'}
                buttonStyle={style.cancelButton}
                onPress={() => setIsModalVisible(false)}
              />
              <Button
                color1={'#8D00FF'}
                color2={'#B356FF'}
                text={modalBuy ? 'Al' : 'Sat'}
                buttonStyle={style.deleteButton}
                onPress={handle}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
