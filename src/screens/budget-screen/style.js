import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  optionsContainer: {
    paddingHorizontal: windowWidth * 0.01,
    width: windowWidth * 0.96,
    height: windowHeight * 0.065,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.grey,
    elevation: 10,
  },
  elipsContainer: {
    marginTop: windowHeight * 0.01,
    width: windowWidth,
    height: windowHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAreaContainer: {
    elevation: 20,
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 30,
    width: windowWidth,
    height: windowHeight * 0.54,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.03,
  },
  buttonStyle: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.05,
  },
  buttonText: {
    fontSize: windowHeight * 0.023,
    color: colors.white,
  },
});
