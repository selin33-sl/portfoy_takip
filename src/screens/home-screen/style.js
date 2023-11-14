import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
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
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * 1,
    padding: windowWidth * 0.02,
    justifyContent: 'space-between',
  },
  pieChart: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.03,
    borderRadius: 100,
    elevation: 15,
  },
  toplamContainer: {
    width: windowWidth,
    height: windowHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toplamText: {
    fontSize: windowHeight * 0.035,
    fontWeight: '400',
    color: 'white',
  },
  birimContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: '#DBADFF',
    borderRadius: 50,
    marginTop: windowHeight * 0.02,
    elevation: 15,
    borderColor: '#10001D',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birimText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '700',
    color: '#10001D',
  },
  listContainer: {
    marginBottom: windowHeight * 0.2,
  },
});
