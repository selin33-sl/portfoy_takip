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
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
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
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    marginBottom: windowHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  progressBar: {
    width: windowWidth * 0.7,
  },

  textContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textType: {
    fontSize: windowHeight * 0.014,
    color: colors.white,
    fontWeight: '300',
  },
  textQuantity: {
    fontSize: windowHeight * 0.014,
    color: colors.white,
    fontWeight: '300',
  },
  textPercentage: {
    fontSize: windowHeight * 0.016,
    color: colors.white,
    fontWeight: '400',
  },
  textHeader: {
    fontSize: windowHeight * 0.03,
    color: colors.white,
    fontWeight: '300',
  },
  listContainer: {
    alignItems: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.53,
    borderRadius: 15,
  },
});
