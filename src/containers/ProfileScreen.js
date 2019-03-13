import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import styles from '../styles/homeStyle'
const people = { // A
  0: {
    name: 'Leela',
    image: 'http://vignette1.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044',
  },
  1: {
    name: 'Bender',
    image: 'https://vignette2.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725',
  },
  2: {
    name: 'Amy',
    image: 'https://i.ytimg.com/vi/4sCtTq7K3yI/hqdefault.jpg',
  },
  3: {
    name: 'Fry',
    image: 'http://www.supergrove.com/wp-content/uploads/2017/03/fry-futurama-22-which-robot-from-quotfuturamaquot-are-you.jpg',
  }
}
class ProfileScreen extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  render() {
    const { id } = this.props.navigation.state.params; // B
    if (!people[id]) return <Text>Sorry, no data exists for this user</Text>
    return (
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Text style={styles.toolBarHeading}>Profile Screen</Text>
        </View>
        <Text style={styles.text}>{people[id].name}</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: people[id].image }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
