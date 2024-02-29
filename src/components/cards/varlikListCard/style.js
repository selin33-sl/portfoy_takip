import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: colors.white,
    width: windowWidth * 0.92,
    maxHeight: windowHeight * 0.09,
    marginTop: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.035,
    flexDirection: 'row',
  },

  row1: {
    alignItems: 'center',

    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.75,
    height: windowHeight * 0.04,
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.75,
    height: windowHeight * 0.04,
  },
  iconContainer: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    fontSize: windowHeight * 0.02,
    color: colors.white,
    fontWeight: '400',
  },
  text2: {
    fontSize: windowHeight * 0.015,
    color: colors.white,
    fontWeight: '300',
  },
});
