import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LineChartt = ({lcData, width, height, maxValue}) => {
  return (
    <LineChart
      isAnimated
      areaChart
      scrollAnimation
      data={lcData}
      // rotateLabel={true}
      xAxisLabelTextStyle={{
        color: 'white',
        width: windowWidth * 0.15,
        fontSize: windowHeight * 0.01,
        marginLeft: windowWidth * 0.05,
      }}
      // xAxisLabelsVerticalShift={5}
      // xAxisIndicesColor={'pink'}
      // xAxisIndicesWidth={1}
      // xAxisLabelsHeight={5}
      // xAxisTextNumberOfLines={2}
      // xAxisLabelTexts={{color: 'green'}}
      // xAxisThickness={10}
      // xAxisType="dotted"
      // showXAxisIndices={false}
      // dataPointLabelShiftX={10}
      width={width}
      height={height}
      hideDataPoints
      color="#00ff83"
      thickness={1}
      startFillColor="rgba(20,105,81,0.3)"
      endFillColor="rgba(20,85,81,0.01)"
      spacing={60}
      startOpacity={3}
      endOpacity={0.2}
      initialSpacing={20}
      endSpacing={50}
      noOfSections={1}
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
        pointerLabelWidth: windowWidth * 0.07,
        pointerLabelHeight: 90,
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: false,
        pointerLabelComponent: items => {
          return (
            <View
              style={{
                justifyContent: 'center',
                marginTop: 60,
                marginLeft: -20,
                width: windowWidth * 0.2,
                backgroundColor: 'purple',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: windowHeight * 0.01,
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
                    fontSize: windowHeight * 0.015,
                  }}>
                  {items[0].value + ' ₺'}
                </Text>
              </View>
            </View>
          );
        },
      }}
    />
  );
};
