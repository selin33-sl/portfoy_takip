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
  button: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.07,
    marginRight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
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
  addPortfoyContainer: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.007,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPortfoyText: {
    color: colors.white,
    fontWeight: '300',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
  },

  text: {
    fontSize: windowHeight * 0.03,
    fontWeight: '400',
    color: colors.white,
  },
  iconsContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    justifyContent: 'center',
  },
  cartInnerContainer: {
    backgroundColor: colors.white,
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    borderRadius: 10,
    marginVertical: windowHeight * 0.005,
    flexDirection: 'row',
    alignItems: 'center',
  },
  portfoyName: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.black,
    fontSize: windowHeight * 0.023,
    fontWeight: '400',
  },
  portfoyNameContainer: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.02,
  },
});
