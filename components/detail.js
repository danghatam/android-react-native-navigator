'use strict';

var React = require('react-native');
var {
  Component,
  Text,
  View,
  TouchableOpacity,
  Image
} = React;

var styles = require('../assets/styles');

class Detail extends Component {

  _handlePress(){
    this.props.navigator.pop();
  }

  render(){
    let movie = this.props.movie;
    return (
      <View style={styles.contianer} >
        <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.header}>
          <View>
            <Text style={styles.button}>&#60; Go back</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>Title: {movie.title}</Text>
          <Text style={styles.year}>Year: {movie.year}</Text>
          <Text style={styles.year}>Description: {movie.synopsis}</Text>
          <Text style={styles.year}>Rating: {movie.mpaa_rating}</Text>
        </View>

      </View>
    );
  }
}

module.exports = Detail;
