import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header, SearchBar, VarlikListCard} from '../../components';

export const VarliklarListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {text} = route.params;

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={text} backIcon />
      <View style={style.innerContainer}>
        <SearchBar />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
      </View>
    </LinearGradient>
  );
};
