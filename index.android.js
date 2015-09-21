/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  ListView,
  Component,
  Text,
  View
} = React;

var List = require('./components/list.js');
var Detail = require('./components/detail.js')
var styles = require('./assets/styles.js');

class App extends Component {

  _renderScene(route, navigator) {
    switch(route.index){
      case 1: return <List navigator={navigator} />
      case 2: return <Detail navigator={navigator} movie={route.movie} />
    }
  }

  // _configureScene(route){
  //     let baseConfig = Navigator.SceneConfigs.FloatFromRight;
  //     let customLeftToRightGesture = Object.assign({}, baseConfig.gestures.pop, {
  //       snapVelocity: 8
  //     });
  //     return Object.assign({}, baseConfig, {
  //       springTension: 100,
  //       springFriction: 1,
  //       gestures: {
  //         pop: customLeftToRightGesture,
  //       }
  //     });
  // }

  render(){
    return(
      <Navigator
        initialRoute={{name: 'List Movies', index:1}}
        renderScene={this._renderScene}
        // configureScene={this._configureScene}
      />
    );
  }

}

AppRegistry.registerComponent('movies', () => App);
