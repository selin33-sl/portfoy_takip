import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 0, 29, 0.8)',
  },

  innerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: 15,
    backgroundColor: colors.lightLilac,
    padding: windowWidth * 0.03,
    alignItems: 'center',
    elevation: 15,
    borderColor: colors.white,
    borderTopWidth: 0.6,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
  },
  iconsContainer: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  text1: {
    fontSize: windowHeight * 0.035,
    fontWeight: '700',
    color: colors.white,
  },
  text2: {
    fontSize: windowHeight * 0.025,
    fontWeight: '400',
    color: colors.white,
  },
  text3: {
    fontSize: windowHeight * 0.02,
    color: colors.white,
    marginTop: windowHeight * 0.01,
  },
  textContainer: {
    height: windowHeight * 0.22,
    width: windowWidth * 0.8,
    justifyContent: 'space-between',
  },
});
