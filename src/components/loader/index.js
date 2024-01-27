import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Loader = () => {
  console.log('ŞUAN LOADERDE');

  const timeout = setTimeout(() => {
    console.log('3 saniye bekledi.');
    // Do something after 3 seconds if needed
  }, 3000);

  // Cleanup function to clear timeout when component unmounts or isLoading changes

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 5,
      }}>
      {console.log('ASLINDA ÇALIŞIYOR AMA')}
      <Text style={{fontSize: 66, color: 'black'}}>aaa</Text>
      {/* <ActivityIndicator
        style={{
          top: '50%',
          position: 'absolute',
          alignSelf: 'center',
        }}
        size={100}
        color={'red'}
      /> */}
      {clearTimeout(timeout)}
    </View>
  );
};
