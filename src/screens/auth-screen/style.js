import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstContainer: {
    height: windowHeight * 0.25,
    width: windowWidth,
  },
  secondContainer: {
    height: windowHeight * 0.7,
    width: windowWidth,
    alignItems: 'center',
  },
  headerContainer: {
    width: windowWidth,
    height: windowHeight * 0.12,
    justifyContent: 'center',
  },
  headerText: {
    paddingLeft: windowWidth * 0.07,
    textAlign: 'left',
    fontSize: windowHeight * 0.04,
    fontWeight: '800',
    color: 'white',
  },
  subTitleContainer: {
    width: windowWidth,
    height: windowHeight * 0.05,
    paddingLeft: windowWidth * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: windowHeight * 0.02,
    fontWeight: '200',
    color: 'white',
  },
  optionText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '500',
    color: 'white',
  },
  inputContainer: {
    height: windowHeight * 0.4,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    marginTop: windowHeight * 0.02,
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9A1FFF',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: windowHeight * 0.03,
    fontWeight: '700',
    color: '#17002A',
  },
  image: {
    height: windowHeight * 0.25,
    width: windowWidth,
  },

  text: {
    fontSize: windowHeight * 0.02,
    color: '#3D4376',
  },
});
