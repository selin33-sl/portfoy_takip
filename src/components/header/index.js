import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export const Header = ({backIcon, text, headerOnPress, option}) => {
  const navigation = useNavigation();
  return (
    <View style={backIcon ? {...style.container} : style.container}>
      {backIcon ? (
        <TouchableOpacity
          style={style.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Icon name={'chevron-left'} size={35} style={style.backIcon} />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={headerOnPress}
        style={
          backIcon
            ? {
                ...style.textContainer,
                alignItems: 'center',
                marginHorizontal: windowWidth * 0.12,
              }
            : option
            ? {
                ...style.textContainer,
                justifyContent: 'flex-start',

                alignItems: 'center',
                flexDirection: 'row',
              }
            : style.textContainer
        }>
        <Text
          style={
            backIcon
              ? style.text
              : {...style.text, marginLeft: windowWidth * 0.04}
          }>
          {text}
        </Text>
        {option ? (
          <Icon name={'chevron-down'} color={'white'} size={30} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
