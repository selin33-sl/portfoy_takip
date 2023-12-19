import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  innerRate: {
    width: windowWidth * 0.23,
    height: windowHeight * 0.05,
    borderRadius: 50,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRateGrafik: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
    borderRadius: 50,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rateButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: windowHeight * 0.01,
    fontWeight: '200',
    color: 'white',
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontSize: windowHeight * 0.03,
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
    width: windowWidth * 0.7,
    height: windowHeight * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsContainer: {
    paddingHorizontal: windowWidth * 0.01,
    width: windowWidth * 0.96,
    height: windowHeight * 0.065,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    elevation: 10,
  },
  elipsContainer: {
    width: windowWidth,
    height: windowHeight * 0.3,
    justifyContent: 'center',
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
    backgroundColor: 'rgba(116, 111, 150, 0.5)',
    width: windowWidth * 0.4,
    height: windowHeight * 0.05,
    elevation: 25,
  },
  elips: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 1, 91, 0.5)',
    elevation: 30,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.2,
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: '#3D4376',
  },
  listContainer: {
    alignItems: 'center',
    maxHeight: windowHeight * 0.45,
    width: windowWidth,
  },
});
