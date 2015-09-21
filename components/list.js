'use strict';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var React = require('react-native');
var {
  Navigator,
  ListView,
  Component,
  Text,
  View
} = React;

var Movie = require('./movie.js');
var styles = require('../assets/styles.js');

class Movies extends Component {

  constructor(){
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }
  //
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  }

  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>Loading movies</Text>
      </View>
    );
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Movie navigator={this.props.navigator} rowData={rowData} />}
          style={styles.listView}
        />

    );
  }
}

module.exports = Movies;
