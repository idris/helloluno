// Basic examples of how your urls can function; extend as you see fit
// For the time being, if you want to call an explicit view function, you'll
// most likely need to import/require the views file itself (working around that soon...)
var hello = require('/Users/idris/helloluno/hello/views');

exports.paths = [
	["/page/two", function(req, resp) {
		// The params on this object will become available to the template during rendering
		return {
			template: "base.html",
			title: req.uri.path,
			message: "I AM BEAUTIFUL, DAMMIT!"
		}
	}],

    ["/hello/*", hello.name],

	["/lolcopters", function(req, resp) {
		return req.uri.path;
	}],

	["/*", "INDEXz!"]
];
