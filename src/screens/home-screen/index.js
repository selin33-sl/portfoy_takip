import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import PieChart from 'react-native-pie-chart';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Header,
  Inform,
  MyModal,
  PortfoyListModal,
  ResizableCard,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getHisseSenediProcess} from '../../api';

export const data = [
  {
    tür: 'Döviz',
    name: 'THYAO1',
    price: '2.230,00',
    adet: '10.00',
    _id: 1,
  },
  {
    tür: 'Döviz',
    name: 'THYAO2',
    price: '2.230,00',
    adet: '10.00',
    _id: 2,
  },
  {
    tür: 'Döviz',
    name: 'THYAO3',
    price: '2.230,00',
    adet: '10.00',
    _id: 3,
  },
  {
    tür: 'Fon',
    name: 'THYAO4',
    price: '2.230,00',
    adet: '10.00',
    _id: 4,
  },
  {
    tür: 'Fon',
    name: 'THYAO5',
    price: '2.230,00',
    adet: '10.00',
    _id: 5,
  },
  {
    tür: 'Döviz',
    name: 'THYAO6',
    price: '2.230,00',
    adet: '10.00',
    _id: 6,
  },
];

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hidden, setHidden] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

  const widthAndHeight = 170;
  const series = [99, 33, 1000, 300, 1, 2];
  const sliceColor = [
    '#3401FF',
    '#00EFFE',
    '#FF007A',
    '#BCFE00',
    '#FF7A00',
    '#DB00FF',
  ];

  const calculatePercentage = series => {
    const total = series.reduce((sum, value) => sum + value, 0);
    return series.map(value => ((value / total) * 100).toFixed(2));
  };
  const percentages = calculatePercentage(series);

  const handleHidden = () => {
    setHidden(!hidden);
  };

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
        onPress={() =>
          navigation.navigate('varlikDetay-screen', {page: 'update'})
        }
        borderColor={
          tür == 'Döviz' ? '#00EFFE' : tür == 'Fon' ? '#FF007A' : null
        }
        tür={tür}
        sendItem={itemsWithSameTur.map(({name, price, adet}) => ({
          name,
          price,
          adet,
        }))}
        hidden={hidden}
      />
    );
  };

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header
        text={'PORTFOY_1'}
        backIcon={false}
        headerOnPress={() => setIsPortfoyListModalVisible(true)}
      />
      <View style={style.innerContainer}>
        <Inform
          deger1={`${percentages[0]}`}
          deger2={`${percentages[1]}`}
          deger3={`${percentages[2]}`}
          deger4={`${percentages[3]}`}
          deger5={`${percentages[4]}`}
          deger6={`${percentages[5]}`}
        />

        <View style={style.pieChart}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.5}
          />
        </View>

        <View style={style.optionContainer}>
          <TouchableOpacity
            style={style.optionButton}
            onPress={() => setIsModalVisible(true)}>
            <Text style={style.birimText}>TL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton} onPress={handleHidden}>
            <Icon
              name={hidden == true ? 'eye-off-outline' : 'eye-outline'}
              size={25}
              color={'#10001D'}
            />
          </TouchableOpacity>
        </View>

        <View style={style.toplamContainer}>
          <Text style={style.toplamText}>{hidden ? '****TL' : '1.377 TL'}</Text>
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

      <MyModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <PortfoyListModal
        isModalVisible={isPortfoyListModalVisible}
        setIsModalVisible={setIsPortfoyListModalVisible}
        isAddModalVisible={isPortfoyAddModalVisible}
        setIsAddModalVisible={setIsPortfoyAddModalVisible}
      />
    </LinearGradient>
  );
};
