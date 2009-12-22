// Set this depending on what you want/need
// "dev" (will eventually) make(s) Luno to serve up static content
// "prod" causes it to not, for resource reasons.
exports.env_mode = "dev";

// None of these are applicable for this release, but keep them in mind anyway.
exports.server_port = 8080;
exports.db_type = "";
exports.db_username = "";
exports.db_password = "";
exports.db_host = "";

// Absolute path to your static directory (trailing slash necessary) 
exports.static = "";

// The url to use when referencing static content (do not include a trailing slash)
exports.static_server = "";

// Absolute path to your directory that holds templates (trailing slash necessary)
// Defaults to the project level, but you can override as you wish
exports.templates = process.cwd() + "/templates/";

// "Installed Apps" - an array telling Luno which apps it should look for
exports.installed_apps = [
	// Nothing yet?
];
