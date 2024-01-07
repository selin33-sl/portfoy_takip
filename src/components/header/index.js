import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const windowWidth = Dimensions.get('window').width;

const BackButton = ({onPress}) => (
  <TouchableOpacity style={style.backIconContainer} onPress={onPress}>
    <Icon name={'chevron-left'} size={35} style={style.backIcon} />
  </TouchableOpacity>
);

export const Header = ({backIcon, text, headerOnPress, option}) => {
  const navigation = useNavigation();

  const textContainerStyle = {
    ...style.textContainer,
    ...(backIcon
      ? {
          alignItems: 'center',
          marginHorizontal: windowWidth * 0.12,
        }
      : option
      ? {
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }
      : {}),
  };

  const textStyles = {
    ...style.text,
    ...(backIcon ? {} : {marginLeft: windowWidth * 0.04}),
  };

  return (
    <View style={backIcon ? {...style.container} : style.container}>
      {backIcon && <BackButton onPress={() => navigation.goBack()} />}

      <TouchableOpacity onPress={headerOnPress} style={textContainerStyle}>
        <Text style={textStyles}>{text}</Text>
        {option && <Icon name={'chevron-down'} color={'white'} size={30} />}
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  backIcon: false,
  option: false,
};
