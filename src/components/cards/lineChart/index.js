import {View, Text} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import React from 'react';

export const LineChartt = ({lcData, width, height, maxValue}) => {
  return (
    <LineChart
      areaChart
      data={lcData}
      rotateLabel={true}
      width={width}
      height={height}
      hideDataPoints
      spacing={35}
      color="#00ff83"
      thickness={1}
      startFillColor="rgba(20,105,81,0.3)"
      endFillColor="rgba(20,85,81,0.01)"
      startOpacity={3}
      endOpacity={0.2}
      initialSpacing={20}
      endSpacing={0}
      noOfSections={2}
      // maxValue={maxValue}
      yAxisColor="white"
      yAxisThickness={0}
      yAxisIndicesColor={'yellow'}
      rulesType="solid"
      rulesColor="gray"
      yAxisTextStyle={{color: 'gray'}}
      yAxisSide="right"
      xAxisColor="lightgray"
      pointerConfig={{
        pointerStripHeight: 160,
        pointerStripColor: 'lightgray',
        pointerStripWidth: 2,
        pointerColor: 'lightgray',
        radius: 6,
        pointerLabelWidth: 100,
        pointerLabelHeight: 90,
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: false,
        pointerLabelComponent: items => {
          return (
            <View
              style={{
                justifyContent: 'center',
                marginTop: 60,
                marginLeft: -40,
                backgroundColor: 'pink',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                  marginBottom: 6,
                  textAlign: 'center',
                }}>
                {items[0].date}
              </Text>

              <View
                style={{
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'black',
                  }}>
                  {items[0].value + '.0' + ' TL'}
                </Text>
              </View>
            </View>
          );
        },
      }}
    />
  );
};
