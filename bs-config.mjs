/* #############
# Browsersync #
###############
[OVERVIEW] Testing site on different browsers with live reloading:
https://browsersync.io/

[OPTIONS]
https://browsersync.io/docs/command-line#start

[CONFIGURATION]
https://browsersync.io/docs/options

[API]
https://browsersync.io/docs/api

[API][INFO] Reloading browsers and injecting files over HTTP via API:
https://browsersync.io/docs/http-protocol

[INFO] Recipes — integrations and workflow scenarios:
https://browsersync.io/docs/recipes
*/


/* eslint-disable unicorn/prefer-module --

[NOTE] I can’t use “import” instead of “require” and “export default” instead of “module.exports” in “bs-config.js”.
Browsersync isn’t ESM package, I get error in console:

```js
Warning: Command failed: npx browser-sync --config G:\Kristinita/bs-config.js --port 4147
G:\Kristinita\node_modules\browser-sync\dist\cli\command.start.js:26
            const conf = require(maybeconf);
                         ^

Error [ERR_REQUIRE_ESM]: require() of ES Module G:\Kristinita\bs-config.js
from G:\Kristinita\node_modules\browser-sync\dist\cli\command.start.js not supported.
```

[INFO] Run Node.js command via CLI and without dependencies:
https://stackoverflow.com/a/76829191/5951529
*/
import { execSync } from "node:child_process";


/* [INFO] Run “npx browser-sync init” Browsersync automatically generates the file “bs-config.js”
→ the user must leave the necessary options in this generated file:
https://browsersync.io/docs/command-line#init */
export default {

/* eslint-enable unicorn/prefer-module */

	/* [INFO] Set files for watching:
	https://browsersync.io/docs/options#option-files */
	files: [

		/* [INFO] Watch changes in CSS, HTML and JS files of the project.

		[INFO] Browsersync applied hot reloading for CSS files by default.
		User make changes and save CSS file → Browsersync show these changes in browser without tab reload:

		[NOTE] Browsersync doesn’t support JavaScript hot reloading.
		Tab reloading required, to have Browsersync apply JS file updates:
		https://github.com/BrowserSync/browser-sync/issues/1001#issuecomment-185269045

		[NOTE][BUG] Browsersync support HTML hot reloading via plugin “bs-html-injector”.
		But when it enabled, Browsersync still reload browser tabs.

		[LEARN][JAVASCRIPT][GLOB] Globster — glob patterns tester:
		https://globster.xyz/ */
		"**/*.{css,html,js}",

		/* [INFO] Ignore changes in minified scripts and styles.
		I minify files for production, not in development process. */
		"!**/*.min.{css,js}",

		/* [INFO] Run CoffeeScript to JavaScript compilation when user change “.coffee” project file.
		File compile to JavaScript → Browsersync reload tab in browser → changes applied.

		[NOTREQUIRED] “file” argument in “fn” function. Use solely “event”.
		*/
		{
			fn: (event) => {
				execSync('grunt coffee');
			},
			match: ["**/*.coffee"]
		},

		/* [INFO] Run Stylus to CSS compilation when user change “.styl” project file.
		File compile to CSS → Browsersync inject CSS changes without tab reload.

		*/
		{
			fn: (event) => {
				execSync('grunt stylus');
			},
			match: ["**/*.styl"]
		},
	],

	/* [INFO] Enable https for local development:
	https://browsersync.io/docs/options#option-https */
	https: {
        cert: "cert.crt",
        key: "cert.key"
    },

    /* [INFO] Override http module to allow using 3rd party server modules (such as http2):
    https://browsersync.io/docs/options#option-httpModule

    [NOTE] Since Node 9 Node.js use built-in HTTP/2 module,
    third-party HTTP/2 module deprecated.
    But Browsersync doesn’t support HTTP/2 native Node.js module:
    https://www.npmjs.com/package/http2
    https://github.com/BrowserSync/browser-sync/pull/1911

    httpModule: 'http2',
    */

    /* [INFO] “ghostMode” — mirror click, scrolls and form inputs to all devices:
    https://browsersync.io/docs/options#option-ghostMode

    ghostMode: {
    	clicks: true,
    	forms: true,
    	location: true,
    	scroll: true
	}
    */

    /* [INFO] Add information about connections to log:
    https://browsersync.io/docs/options#option-logConnections */
    logConnections: true,

	/* [INFO] Default console output.
	Use “logLevel: "debug",” for debugging Browsersync behavior:
	https://browsersync.io/docs/options#option-logLevel

	[NOTE][BUG] Browsersync prints X11 color names to console:
	https://github.com/BrowserSync/browser-sync/issues/2060
	*/
	logLevel: "info",

	/* [INFO] Don’t open anything in the browser when Browsersync starts:
	https://browsersync.io/docs/options#option-open */
	open: false,

	/* #################
	# bs-html-injector #
	####################

	[OVERVIEW] bs-html-injector — Browsersync plugin for HTML hot reloading:
	https://github.com/shakyShane/html-injector

	[BUG] Browsersync reload browser tabs, not inject HTML regardless of enabled bs-html-injector or not:
	https://github.com/shakyShane/html-injector/issues/22#issuecomment-1913525893
	https://github.com/shakyShane/html-injector/issues/30

	[INFO] bs-html-injector prints to console output below, but not inject changes to HTML

	```text
	[Browsersync] [HTML Injector] Stashing: {magenta:http://localhost:4147/
	[Browsersync] [HTML Injector] Cache items: {yellow:1
	```

	[NOTE] bs-html-injector useless and hasn’t been updated since 2017.
	I removed this plugin from my local environment:
	https://github.com/shakyShane/html-injector/commits/master/	*/
	// plugins: ["bs-html-injector?files[]=**/*.html"],

	/* [INFO] Browsersync static server settings:
	https://browsersync.io/docs/options#option-server */
	server: {
		/* [INFO] Run browsersync in current directory:
		https://browsersync.io/docs/options#option-server */
		directory: true,

		/* [INFO] Serve HTML files without “.html” extension.
		For example, if user have a file “KiraGoddess.html”,
		with this option Browsersync successfully opens “https://localhost:4147/KiraGoddess” in browser.
		“https://localhost:4147/KiraGoddess.html” not required:
		https://github.com/BrowserSync/browser-sync/issues/1055#issuecomment-224293199 */
		serveStaticOptions: {
			extensions: ["html"]
		}
	},


	/* [INFO] Watch all project files automatically. Plugins as “grunt-contrib-watch” not required for Browsersync.
	This option is alternative of the option “files”:
	https://browsersync.io/docs/options#option-watch

	[NOTE] Don’t combine “files” and “watch: true”, that watch all project files.
	Browsersync already watch files without “watch” option.
	If “watch: true”, Browsersync reload tabs when user saves the project file with any extension:
	https://github.com/BrowserSync/browser-sync/issues/2061#issuecomment-1913666588

	watch: false
	*/

	/* [INFO] “watchOptions” — Chokidar watch options:
	https://github.com/paulmillr/chokidar#api

	watchOptions: {}
	*/


	/* [INFO] Use wildcard DNS for any IP address:
	https://browsersync.io/docs/options#option-xip

	[NOTE] xip.io no longer works, nip.io is alternative:
	https://nip.io/

	xip: false
	*/
};
