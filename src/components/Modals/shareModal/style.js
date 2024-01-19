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
    borderWidth: 0.3,
  },
  imageContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.33,
  },

  shareButton: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.02,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '300',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
  },

  text: {
    fontSize: windowHeight * 0.03,
    fontWeight: '500',
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
  },
  portfoyName: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    color: colors.black,
  },
  portfoyNameContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.02,
  },
});
