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
    width: windowWidth * 0.7,
    height: windowHeight * 0.2,
    borderRadius: 15,
    backgroundColor: '#DBADFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    borderColor: 'white',
    borderWidth: 0.3,
  },
  iconsContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionContainer: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.05,
    // borderWidth: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  optionsContainer: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.7,
    paddingTop: windowHeight * 0.01,
    alignItems: 'center',
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: 'white',
    textAlign: 'center',
  },
});
