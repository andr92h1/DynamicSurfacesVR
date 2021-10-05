//-------------STEP 1-----------//

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
//-------------STEP 1 END-----------// ---> GO TO CLIENT.JS

//-----------------STEP 11---------------
class ButtonSurface extends React.Component{
  render(){
    return(
      <View style={styles.buttonPanel}>
        <VrButton style={styles.greetingBox} onClick={()=>surfaceModule.createPanel()}>
        <Text>Create Button</Text>
        </VrButton>
      </View>
    )
  }
}
//-----------------STEP 11 END---------------GO BOTTOM

export default class DynamicSurfacesVR extends React.Component {
/////////----------------STEP 8--------------

  state={
    width:1000,
    height:600
  }

  changeSurfaceDimension(widthParam,heightParam){
    surfaceModule.changeSize(widthParam,heightParam);
  this.state.width=widthParam;
  this.state.height=heightParam;
  this.setState({width:widthParam,height:heightParam});
    
  }
/////////---------------------STEP 8 END----------------GO TO CLIENT.JS

  ////////-----------------STEP 5----------------
  render() {
    return (
      <View style={[styles.panel,{width:this.state.width,height:this.state.height}]}>
        <VrButton style={styles.greetingBox}onClick={()=>this.changeSurfaceDimension(500,500)}>
          <Text>Change Dim.</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Flat")}>
          <Text>Flat</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={() => surfaceModule.changeSurfaceType("Cylinder")}>
          <Text>Cylinder</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={()=>this.changeSurfaceDimension(1000,600)}>
          <Text>Reset</Text>
        </VrButton>

        <VrButton style={styles.greetingBox} onClick={()=>{surfaceModule.destroyPanel()}}>
          <Text>Destroy</Text>
        </VrButton>
        
      </View>
    );
  }
};
/////////////------------STEP 5 END------------------- GO TO CLIENT.JS

const styles = StyleSheet.create({
  panel: {
   
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

///////////////-------------STEP 12------------------------------
AppRegistry.registerComponent('ButtonSurface',()=>ButtonSurface);
///////////////--------------STEP 12 END---------------------------