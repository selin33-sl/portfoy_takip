import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const CalendarModal = ({
  isDatePickerVisible,
  setDatePickerVisibility,
  setSelectedDate,
  selectedDate,
}) => {
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    const dateObject = new Date(date);

    const gun = dateObject.getDate();
    const ay = dateObject.getMonth() + 1; // Aylar 0'dan başladığı için 1 ekleyerek düzeltiyoruz.
    const yil = dateObject.getFullYear();

    const formatliTarih = `${gun < 10 ? '0' : ''}${gun}-${
      ay < 10 ? '0' : ''
    }${ay}-${yil}`;

    setSelectedDate(formatliTarih);
    hideDatePicker();
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
