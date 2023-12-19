import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  text: {
    fontSize: windowHeight * 0.02,
    color: '#3D4376',
  },

  innerAreaContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
  },
  headerText: {
    fontSize: windowHeight * 0.017,
    fontWeight: '300',
    color: 'white',
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
    backgroundColor: '#958EBF',
    borderRadius: 10,
    fontSize: windowHeight * 0.021,
    fontWeight: '500',
    color: 'white',
  },
  input2: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.06,
    borderRadius: 10,
    backgroundColor: '#958EBF',
    fontSize: windowHeight * 0.021,
    fontWeight: '500',
    color: 'white',
  },

  virgul: {
    fontSize: windowHeight * 0.04,
    fontWeight: '400',
    color: 'white',
  },
  typeText: {
    fontSize: windowHeight * 0.018,
    fontWeight: '200',
    color: 'white',
  },
  typeContainer: {
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 0.27,
    height: windowHeight * 0.06,
    justifyContent: 'center',
  },
});
