import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;

export default class DynamicSurfacesVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <VrButton style={styles.greetingBox}>
          <Text>Change Dim.</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Flat")}>
          <Text>Flat</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Cylinder")}>
          <Text>Cylinder</Text>
        </VrButton>

        <VrButton style={styles.greetingBox}>
          <Text>Reset</Text>
        </VrButton>

        <VrButton style={styles.greetingBox}>
          <Text>Destroy</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 200,
    height: 60,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  buttonPanel: {
    width: 300,
    height: 300,
    backgroundColor: 'rgb(255,127,80)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('DynamicSurfacesVR', () => DynamicSurfacesVR);
