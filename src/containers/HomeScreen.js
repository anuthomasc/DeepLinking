import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform, StyleSheet, Linking
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import styles from '../styles/homeStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() { // B
    console.log('componentDidMount')
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        console.log(url + "url")
        console.log(url)
        console.log(url)
        console.log(url)
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() { // C
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL = (event) => { // D
    this.navigate(event.url);
  }
  navigate = (url) => { // E
    console.log(url);
    console.log('acs');
    console.log(this.props)
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    console.log(routeName)
    // if (routeName === 'people') {
    console.log("hgfdghjk")
    navigate('Profile', { id, name: 'chris' })
    // };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Text style={styles.toolBarHeading}>Home Screen</Text>
        </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
