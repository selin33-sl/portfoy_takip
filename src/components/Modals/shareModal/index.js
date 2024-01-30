import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ShareModal = ({isModalVisible, setIsModalVisible, image}) => {
  const handleShare = async () => {
    try {
      // Share the image
      await Share.open({
        url: `file://${image}`,
      });
    } catch (error) {}
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

          <View style={style.imageContainer}>
            <Image source={{uri: `file://${image}`}} style={style.image} />
          </View>

          <LinearGradient
            colors={['#150193', '#6354BA']}
            style={style.shareButton}>
            <TouchableOpacity
              onPress={() => {
                handleShare();
              }}>
              <Text style={style.buttonText}>Paylaş</Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Modal>
  );
};
