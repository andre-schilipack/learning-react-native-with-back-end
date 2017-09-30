import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    var bla = "oi "
    return (
      <MapView style={{flex:1}} initialRegion={{
        latitude: 37,
        longitude: -122,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}>
      </MapView>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>{bla}Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
