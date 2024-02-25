import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    width: windowWidth * 0.9,
    borderRadius: 15,
    elevation: 15,
    marginBottom: 8,
  },

  innerContainer: {
    borderRadius: 15,
    elevation: 15,
    justifyContent: 'center',
  },
  halfContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    minHeight: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profitInfoContainer: {
    flexDirection: 'row',
  },
  infoButtonContainer: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    backgroundColor: colors.grey,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  profitContainer: {
    width: 'auto',
    height: windowWidth * 0.06,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profitText: {
    fontSize: windowHeight * 0.015,
    paddingHorizontal: 5,
    color: colors.white,
    fontWeight: '500',
  },

  detailContainer: {
    paddingHorizontal: windowWidth * 0.02,
    marginHorizontal: windowWidth * 0.02,
    backgroundColor: colors.white,
    height: windowHeight * 0.08,
    marginVertical: windowHeight * 0.005,
    borderRadius: 10,
    paddingVertical: 3,
    justifyContent: 'space-between',
    borderWidth: 2,
  },
  detail1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detail2: {
    height: windowHeight * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconRow: {
    backgroundColor: 'blue',
    width: windowHeight * 0.1,
  },
  textDetailName: {
    fontSize: windowHeight * 0.02,
    color: colors.primary2,
    fontWeight: '400',
  },
  textDetailPrice: {
    fontSize: windowHeight * 0.015,
    color: colors.primary2,
    textAlign: 'center',
  },
  textDetailNumber: {
    fontSize: windowHeight * 0.018,
    color: colors.primary2,
  },

  text: {
    fontSize: windowHeight * 0.02,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
  },
});
