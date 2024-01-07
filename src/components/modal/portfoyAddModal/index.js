import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const PortfoyAddModal = ({isAddModalVisible, setIsAddModalVisible}) => {
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
            <Text style={style.text}>Yeni Portföy</Text>
          </View>
          <View style={style.headerContainer}>
            <Text style={style.text1}>Portföy İsmi: </Text>
          </View>
          <View style={style.inputContainer}>
            <TextInput
              style={style.textInput}
              placeholder="Portföy ismi yaz"
              placeholderTextColor={'#D3D3D3'}
            />
          </View>

          <LinearGradient
            colors={['#150193', '#6354BA']}
            style={style.addPortfoyContainer}>
            <TouchableOpacity>
              <Text style={style.addPortfoyText}>Oluştur</Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Modal>
  );
};
