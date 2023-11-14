import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 0.7,
    width: windowWidth * 0.9,
    borderRadius: 15,
    elevation: 15,
    marginBottom: 8,
  },

  innerContainer: {
    borderRadius: 15,
    elevation: 15,
    justifyContent: 'center',
  },
  halfContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.035,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContainer: {
    paddingHorizontal: windowWidth * 0.02,
    marginHorizontal: windowWidth * 0.02,
    backgroundColor: 'white',
    height: windowHeight * 0.08,
    marginTop: windowHeight * 0.005,
    borderRadius: 10,
    paddingVertical: 3,
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDetailName: {
    fontSize: windowHeight * 0.022,
    color: '#10001D',
    fontWeight: '400',
  },
  textDetailPrice: {
    fontSize: windowHeight * 0.015,
    color: '#10001D',
    textAlign: 'center',
  },
  textDetailNumber: {
    fontSize: windowHeight * 0.018,
    color: '#10001D',
  },

  text: {
    fontSize: windowHeight * 0.02,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
});
