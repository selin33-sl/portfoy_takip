import {View, Text, Modal, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import {Button} from '../../button';

export const AlertModal = ({
  isModalVisible,
  setIsModalVisible,
  handleDelete,
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
                text={'İptal'}
                buttonStyle={style.cancelButton}
                onPress={() => setIsModalVisible(false)}
              />
              <Button
                text={'Sil'}
                buttonStyle={style.deleteButton}
                onPress={handleDelete}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
