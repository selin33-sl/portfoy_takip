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
    height: windowHeight * 0.3,
    borderRadius: 15,
    backgroundColor: '#DBADFF',
    padding: windowWidth * 0.03,
    alignItems: 'center',
    elevation: 15,
    borderColor: 'white',
    borderTopWidth: 0.6,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
  },
  iconsContainer: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionsContainer: {
    height: windowHeight * 0.22,
    width: windowWidth * 0.7,
    paddingTop: windowHeight * 0.01,
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
  text: {
    fontSize: windowHeight * 0.02,
    color: 'white',
    textAlign: 'center',
  },
});
