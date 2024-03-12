import {View, Text, Modal, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export const CurrencyModal = ({isModalVisible, setIsModalVisible}) => {
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
                size={25}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={style.optionsContainer}>
            <TouchableOpacity style={style.optionContainer}>
              <Text style={style.text}>₺ - Türk Lirası</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.optionContainer}>
              <Text style={style.text}>USD - Amerikan Doları</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
