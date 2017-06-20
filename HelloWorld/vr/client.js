// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

import * as OVRUI from 'ovrui';

function init(bundle, parent, options) {
  OVRUI.loadFont(
          '/static_assets/fonts/japanese.fnt',
          '/static_assets/fonts/japanese.png'
  ).then((font) => {
    const vr = new VRInstance(bundle, 'HelloWorld', parent, {
      // Add custom options here
      font: font,
      ...options,
    });
    vr.render = function() {
      // Any custom behavior you want to perform on each frame goes here
    };
    // Begin the animation loop
    vr.start();
    return vr;
  });
}

window.ReactVR = {init};
