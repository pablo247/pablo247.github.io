// Third party libraries
try {
    // Framework UIkit
    window.UIkit = require('uikit');
    let Icons = require('uikit/dist/js/uikit-icons');

    // loads the Icon plugin
    UIkit.use(Icons);
} catch (error) {}


// Own Components
try {
    // require('./../global/components/component_example');
    // require('./components/component_example');
} catch (error) { }
