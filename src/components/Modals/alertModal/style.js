import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rgbDark,
  },

  innerContainer: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    borderColor: colors.white,
    borderTopWidth: 0.6,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
  },
  cancelButton: {
    width: windowWidth * 0.22,
    height: windowHeight * 0.04,
    backgroundColor: 'red',
  },
  deleteButton: {
    width: windowWidth * 0.22,
    height: windowHeight * 0.04,
    backgroundColor: colors.purple,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  warningContainer: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    color: colors.white,
    fontSize: windowHeight * 0.018,
  },
  alertText: {
    color: colors.white,
    fontSize: windowHeight * 0.016,
    fontWeight: '300',
  },
  iconsContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.7,
    height: windowHeight * 0.04,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionContainer: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.05,
    // borderWidth: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
    justifyContent: 'center',
  },
  optionsContainer: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.02,
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: colors.white,
    textAlign: 'center',
  },
});
