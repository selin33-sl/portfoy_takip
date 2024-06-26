import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  options: {
    height: windowWidth * 0.1,
    paddingHorizontal: windowWidth * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: windowWidth,
  },
  timePeriodContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.04,
    height: windowHeight * 0.04,
    borderWidth: 1,
    borderColor: colors.pale,
    borderRadius: 20,
  },
  buttonStyle: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: windowHeight * 0.023,
    color: colors.white,
  },
  buttonsContainer: {
    width: windowWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.1,
    height: windowHeight * 0.055,
    right: -50,
    backgroundColor: 'red',
    borderRadius: 50,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineChartContainer: {
    height: windowHeight * 0.25,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: colors.pale,
  },
  infoContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 30,
    backgroundColor: 'red',
  },
  inputAreaContainer: {
    elevation: 20,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 30,
    width: windowWidth,
    height: windowHeight * 0.54,
    alignItems: 'center',
  },
  innerAreaContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
  },
  headerText: {
    fontSize: windowHeight * 0.017,
    fontWeight: '300',
    color: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    height: windowHeight * 0.07,
    alignItems: 'center',
  },
  input1: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    backgroundColor: colors.purpleLight,
    borderRadius: 10,
    fontSize: windowHeight * 0.021,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.white,
  },
  input2: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.06,
    borderRadius: 10,
    backgroundColor: colors.purpleLight,
    fontSize: windowHeight * 0.021,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.white,
  },

  virgul: {
    fontSize: windowHeight * 0.04,
    fontWeight: '400',
    color: colors.white,
  },
  typeText: {
    fontSize: windowHeight * 0.018,
    fontWeight: '200',
    color: colors.white,
  },
  typeContainer: {
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 0.27,
    height: windowHeight * 0.06,
    justifyContent: 'center',
  },
  calendarContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    height: windowHeight * 0.07,
    alignItems: 'center',
  },
  saveButtonContainer: {
    marginTop: 30,
    width: windowWidth * 0.5,
    height: windowHeight * 0.055,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.055,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: windowHeight * 0.025,
    fontWeight: '400',
    color: colors.white,
    textAlign: 'center',
  },
  disabledButton: {},
  descContainer: {
    width: windowWidth,
    height: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '200',
    color: colors.white,
  },
});
