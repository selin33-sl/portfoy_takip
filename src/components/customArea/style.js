import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerRate: {
    width: 'auto',
    height: windowHeight * 0.05,
    borderRadius: 50,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.02,
  },
  innerRateGrafik: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
    borderRadius: 50,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselText: {
    fontSize: windowHeight * 0.02,
    marginTop: windowHeight * 0.005,
    color: colors.white,
  },

  rateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    marginLeft: windowWidth * 0.02,
  },
  text1: {
    fontSize: windowHeight * 0.013,
    marginTop: windowHeight * 0.008,
    fontWeight: '200',
    color: colors.white,
  },
  totalChangeText: {
    fontSize: windowHeight * 0.016,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberText: {
    color: colors.white,
    fontSize: windowHeight * 0.029,
  },
  innerElips: {
    height: windowHeight * 0.25,
    paddingTop: windowHeight * 0.05,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateContainer: {
    marginTop: 20,
    width: 'auto',
    height: windowHeight * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerElips: {
    flexDirection: 'row',
    top: 0,
    zIndex: 1,
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rgbLight,
    width: 'auto',
    paddingHorizontal: windowWidth * 0.02,
    height: windowHeight * 0.05,
    elevation: 25,
  },
  elips: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rgbMid,
    elevation: 20,
  },

  listContainer: {
    alignItems: 'center',
    maxHeight: windowHeight * 0.45,
    width: windowWidth,
  },
});
