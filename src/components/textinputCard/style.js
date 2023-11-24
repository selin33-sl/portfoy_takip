import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContaienr: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderWidth: 1,
    borderColor: '#9A1FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textInput: {
    fontSize: windowHeight * 0.02,
    color: 'white',
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.65,
    height: windowWidth * 0.15,
    borderWidth: 1,
    borderColor: '#9A1FFF',
    borderRadius: 20,
  },
});
