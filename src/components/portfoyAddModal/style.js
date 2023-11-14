import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 0, 29, 0.8)',
  },

  innerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
    borderRadius: 15,
    backgroundColor: '#DBADFF',
    padding: windowWidth * 0.03,
    alignItems: 'center',
    elevation: 15,
    borderColor: 'white',
    borderWidth: 0.3,
  },
  addPortfoyContainer: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.02,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPortfoyText: {
    color: 'white',
    fontWeight: '300',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
  },

  text: {
    fontSize: windowHeight * 0.03,
    fontWeight: '500',
    color: 'white',
  },
  text1: {
    fontSize: windowHeight * 0.02,
    fontWeight: '500',
    color: 'white',
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
  inputContainer: {
    backgroundColor: 'white',
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    borderRadius: 10,
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.2,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
