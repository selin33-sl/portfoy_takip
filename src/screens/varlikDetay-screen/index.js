import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {
  CalendarModal,
  FullScreenLineChartModal,
  Header,
  LineChartt,
  TimePeriodModal,
} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import Orientation from 'react-native-orientation-locker';

export const VarlikDetayScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [fullScreen, setFullScreen] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('Bugün');
  const [timePeriodVisible, setTimePeriodVisible] = useState(false);

  const InputContainer = ({text, typeText}) => {
    return (
      <View style={style.innerAreaContainer}>
        <Text style={style.headerText}>{text}:</Text>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input1}
            textAlign="right"
            keyboardType="numeric"></TextInput>
          <Text style={style.virgul}>,</Text>
          <TextInput style={style.input2} keyboardType="numeric"></TextInput>
          <View style={style.typeContainer}>
            <Text style={style.typeText}>{typeText}</Text>
          </View>
        </View>
      </View>
    );
  };

  const lcData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 145, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
        <Header text={'USD'} backIcon />
        <View style={style.descContainer}>
          <Text style={style.descText}>United States Dollar</Text>
        </View>

        <View style={style.lineChartContainer}>
          <LineChartt lcData={lcData} width={340} height={150} />
        </View>

        <View style={style.options}>
          <TouchableOpacity
            style={style.timePeriodContainer}
            onPress={() => setTimePeriodVisible(true)}>
            <Text>{timePeriod}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsAddModalVisible(true)}>
            <Icon name={'fit-to-screen-outline'} size={30} color={'white'} />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#10001D', '#44007A']}
          style={style.inputAreaContainer}>
          <InputContainer text={'Miktar'} typeText={'USDDFGD'} />
          <InputContainer text={'Satın Alma Fiyatı'} typeText={'TL'} />

          <View style={style.innerAreaContainer}>
            <Text style={style.headerText}>Satın Alma Tarihi:</Text>
            <View style={style.calendarContainer}>
              <TextInput
                style={{...style.input1, marginRight: 4}}
                editable={false}
                textAlign="center"
                value={selectedDate}
                onChangeText={setSelectedDate}
              />
              <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                <Icon name={'calendar-month'} color={'#958EBF'} size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.saveButtonContainer}>
            <LinearGradient
              colors={['#05A04D', '#007029']}
              style={style.saveButton}>
              <Text style={style.saveButtonText}>Kaydet</Text>
            </LinearGradient>
          </View>
        </LinearGradient>
      </LinearGradient>
      <CalendarModal
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <FullScreenLineChartModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
        lcData={lcData}
      />

      <TimePeriodModal
        isModalVisible={timePeriodVisible}
        setIsModalVisible={setTimePeriodVisible}
        selectedItem={timePeriod}
        setSelectedItem={setTimePeriod}
      />
    </ScrollView>
  );
};
