import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageStyle: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
  },
  shareArea: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * 1,
    padding: windowWidth * 0.02,
    justifyContent: 'space-between',
  },
  detailIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
  },
  shareContainer: {
    width: windowHeight * 0.05,
    height: windowHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    elevation: 10,
    borderRadius: 20,
  },

  pieChart: {
    width: windowWidth,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChartContainer: {
    width: windowWidth,
    height: windowHeight * 0.4,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: windowHeight * 0.01,
  },
  toplamContainer: {
    width: 'auto',
    height: windowHeight * 0.07,
    paddingHorizontal: windowWidth * 0.03,
    borderRadius: 100,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: windowHeight * 0.02,
  },
  toplamText: {
    fontSize: windowHeight * 0.035,
    fontWeight: '400',
    color: 'white',
  },
  optionButton: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: colors.lightLilac,
    borderRadius: 50,
    elevation: 15,
    borderColor: colors.primary2,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  birimText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '700',
    color: colors.white,
  },
  listContainer: {
    alignItems: 'center',
    maxHeight: windowHeight * 0.32,
    width: windowWidth,
    paddingBottom: windowHeight * 0.015,
  },
  optionContainer: {
    width: windowWidth,
    height: windowWidth * 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 0.02,
  },
});
