// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  buttonSurface=new Surface(300,300,Surface.SurfaceShape.Flat);
  buttonSurface.setAngle(5,0);

  surfacePanel=r360.renderToSurface(
    r360.createRoot('ButtonSurface', { /* initial props */ }),
    buttonSurface
  );

  surface = r360.getDefaultSurface();

  // Render your app content to the default cylinder surface
  surfacePanel=r360.renderToSurface(
    r360.createRoot('DynamicSurfacesVR', { /* initial props */ }),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}


class surfaceModule extends Module {
constructor() {
super('surfaceModule');

}

changeSize(width,height){
  surface.resize(width,height);
}

destroyPanel(){
  r360.detachRoot(surfacePanel);
}

changeSurfaceType(Type) {

  Type === "Flat" ? surface.setShape(Surface.SurfaceShape.Flat) : surface.setShape(Surface.SurfaceShape.Cylinder);
}

createPanel(){
  r360.renderToSurface(r360.createRoot(
    'DynamicSurfacesVR',{}),surface
  );
}

}

window.React360 = {init};
