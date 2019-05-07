import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../Components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressThemes = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  };

  handlePressSite = () => {
    console.log('press site');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default Options;
