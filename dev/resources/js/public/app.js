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
    require('./components/menu');


    document.addEventListener('readystatechange', event => {
		// All HTML DOM elements are accessible
        if (event.target.readyState === "interactive")
        {
            require('./data/links');
            require('./data/profile');
            require('./data/skills');
            require('./data/technologies');
            require('./data/educations');
            require('./data/professional_experience');
        }

		// Now external resources are loaded too, like css,src etc.
        if (event.target.readyState === "complete")
        {}
	});
} catch (error) { }
