import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContaienr: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderWidth: 1,
    borderColor: colors.lilac,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textInput: {
    fontSize: windowHeight * 0.02,
    color: colors.white,
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.65,
    height: windowWidth * 0.15,
    borderWidth: 1,
    borderColor: colors.lilac,
    borderRadius: 20,
  },
  inputContainer: {
    height: 'auto',
  },
  errorText: {
    color: 'red',
    marginLeft: windowWidth * 0.05,
  },
  passworVisibleButton: {
    position: 'absolute',
    width: windowWidth * 0.65,
    height: windowWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: windowWidth * 0.05,
  },
});
