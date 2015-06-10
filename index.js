/**
 * exabugs 2015/06/10
 * DreamArts Corp.
 */

require('!style!css!./themes/alertify.bootstrap.css');
require('!style!css!./themes/alertify.core.css');

// With no changes to the original source we must export from the global object
module.exports = require("imports?this=>window!./lib/alertify");
