import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import PieChart from 'react-native-pie-chart';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header,
  Inform,
  MyModal,
  PortfoyListModal,
  ResizableCard,
} from '../../components';

export const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

  const widthAndHeight = 200;
  const series = [0, 0, 10, 1, 1, 1];
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

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <TouchableOpacity
            style={style.birimContainer}
            onPress={() => setIsModalVisible(true)}>
            <Text style={style.birimText}>TL</Text>
          </TouchableOpacity>

          <View style={style.toplamContainer}>
            <Text style={style.toplamText}>1.377 TL</Text>
          </View>
          <View style={style.listContainer}>
            <ResizableCard
              borderColor={'#00EFFE'}
              tür={'Döviz'}
              name={'THYAO'}
              price={'2.230,00'}
              adet={'10.00'}
            />
            <ResizableCard
              borderColor={'#FF007A'}
              tür={'Fon'}
              name={'THYAO'}
              price={'2.230,00'}
              adet={'10.00'}
            />
            <ResizableCard
              borderColor={'#FF007A'}
              tür={'Fon'}
              name={'THYAO'}
              price={'2.230,00'}
              adet={'10.00'}
            />
            <ResizableCard
              borderColor={'#FF007A'}
              tür={'Fon'}
              name={'THYAO'}
              price={'2.230,00'}
              adet={'10.00'}
            />
            <ResizableCard
              borderColor={'#FF007A'}
              tür={'Fon'}
              name={'THYAO'}
              price={'2.230,00'}
              adet={'10.00'}
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
      </ScrollView>
    </LinearGradient>
  );
};
