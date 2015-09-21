'use strict';

var React =  require('react-native');
var styles = require('../assets/styles.js');

var {
  Text,
  View,
  Image,
  Component,
  TouchableOpacity
} = React;

class Movie extends Component {

  handleViewDetail(){
    this.props.navigator.push({
      name: 'Detail Movie',
      index: 2,
      movie: this.props.rowData
    })
  }

  renderMovie(movie){
    return(
      <TouchableOpacity onPress={this.handleViewDetail.bind(this)}>
        <View style={styles.contianer} >
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render(){
    return this.renderMovie(this.props.rowData);
  }
}

module.exports = Movie;
