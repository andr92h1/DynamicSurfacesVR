// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

//----------STEP 2---------------
import {ReactInstance, Module, Surface} from 'react-360-web';
//---------END STEP 2------------
function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    //--------STEP 3--------
    nativeModules: [
      new surfaceModule(),
    ],
    //-------STEP 3 END------
    ...options,
  });
////////---------STEP 9-------------- CREATING PART
  buttonSurface=new Surface(300,300,Surface.SurfaceShape.Flat);
  buttonSurface.setAngle(5,0);

  surfacePanel=r360.renderToSurface(
    r360.createRoot('ButtonSurface', { /* initial props */ }),
    buttonSurface
  );
//////////--------STEP 9-----------END
  surface = r360.getDefaultSurface();

  // Render your app content to the default cylinder surface
  surfacePanel=r360.renderToSurface(
    r360.createRoot('DynamicSurfacesVR', { /* initial props */ }),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

//----------------STEP 4------------- 
class surfaceModule extends Module {
constructor() {
super('surfaceModule');

}
//---------------STEP 4 END-----------GO TO INDEX.JS

//-------------STEP 7-------------
changeSize(width,height){
  surface.resize(width,height);
}
//-------------STEP 7 END----------- GO TO INDEX.JS
destroyPanel(){
  r360.detachRoot(surfacePanel);
}
////------------STEP 6---------------------
changeSurfaceType(Type) {

  Type === "Flat" ? surface.setShape(Surface.SurfaceShape.Flat) : surface.setShape(Surface.SurfaceShape.Cylinder);
}
////--------------STEP 6 END-------------

////--------------STEP 10------------------ CREATING
createPanel(){
  r360.renderToSurface(r360.createRoot(
    'DynamicSurfacesVR',{}),surface
  );
}
/////--------------STEP 10 END--------------- GO TO INDEX.JS
}

window.React360 = {init};
