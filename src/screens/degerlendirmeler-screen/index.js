import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CircleOptionCard,
  Header,
  PortfoyListModal,
  ResizableCard,
} from '../../components';
import style from './style';
import {images} from '../../assets';
import {data} from '../home-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DegerlendirmelerScreen = () => {
  const [option, setOption] = useState('1');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

  const getUniqueTurItems = data => {
    const uniqueTurItems = {};
    data.forEach(item => {
      const tur = item.tür;
      if (!uniqueTurItems[tur]) {
        uniqueTurItems[tur] = item;
      }
    });
    return Object.values(uniqueTurItems);
  };

  const uniqueTurItems = getUniqueTurItems(data);

  const renderItem = ({item}) => {
    const {tür} = item;
    const itemsWithSameTur = data.filter(dataItem => dataItem.tür === tür);

    return (
      <ResizableCard
        borderColor={
          tür == 'Döviz' ? '#00EFFE' : tür == 'Fon' ? '#FF007A' : null
        }
        tür={tür}
        sendItem={itemsWithSameTur.map(({name, price, adet}) => ({
          name,
          price,
          adet,
        }))}
      />
    );
  };

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'DEĞERLENDİRMELER'} />
      <View style={style.innerContainer}>
        <View style={style.optionsContainer}>
          <CircleOptionCard
            color={option == '1' ? '#6D688C' : '#AEAEAE'}
            text={'Kar/Zarar'}
            onPress={() => setOption('1')}
          />
          <CircleOptionCard
            color={option == '2' ? '#6D688C' : '#AEAEAE'}
            text={'Toplam Maliyet'}
            onPress={() => setOption('2')}
          />
          <CircleOptionCard
            color={option == '3' ? '#6D688C' : '#AEAEAE'}
            text={'Ortalama Maliyet'}
            onPress={() => setOption('3')}
          />
        </View>

        <View style={style.elipsContainer}>
          <View style={style.elips}>
            <TouchableOpacity
              style={style.headerElips}
              onPress={() => setIsPortfoyListModalVisible(true)}>
              <Text>PORTFÖY_1</Text>
              <Icon name={'chevron-down'} color={'white'} size={30} />
            </TouchableOpacity>

            <View style={style.innerElips}>
              <Text style={style.numberText}>15.855 TL</Text>

              <View style={style.rateContainer}>
                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>Günlük</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRate}>
                    <Text>%21,1</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>Toplam</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRate}>
                    <Text>%4,3</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>Grafik</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRateGrafik}>
                    <Icon name={'chart-line'} size={25} color={'#00ff83'} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={uniqueTurItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <PortfoyListModal
        isModalVisible={isPortfoyListModalVisible}
        setIsModalVisible={setIsPortfoyListModalVisible}
        isAddModalVisible={isPortfoyAddModalVisible}
        setIsAddModalVisible={setIsPortfoyAddModalVisible}
      />
    </LinearGradient>
  );
};
