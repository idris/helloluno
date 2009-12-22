/*	Our basic view function - specify a template, and objects we
	want to exist in that template.
*/
exports.name = function(req, resp) {
    process.watchFile('/Users/idris/helloluno/hello/views.js', function(curr, prev) {
        require('sys').puts('FILE CHANGED');
    });
	return {
		template: "base.html",
		page_title: "Hello Name" 
	}
}
