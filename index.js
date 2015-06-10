require('!style!css!./themes/alertify.bootstrap.css');
require('!style!css!./themes/alertify.core.css');
require('!style!css!./themes/alertify.default.css');
require('./lib/alertify');

// With no changes to the original source we must export from the global object
module.exports = window.Alertify;
