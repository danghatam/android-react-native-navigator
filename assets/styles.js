'use strict';

var {StyleSheet} = require('react-native');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#3a5795',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  button: {
    color: '#ffffff',
  },
});

module.exports = styles;
