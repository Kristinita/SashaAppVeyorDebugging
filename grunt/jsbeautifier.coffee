########################
## grunt-jsbeautifier ##
########################
# Beautify HTML, CSS and JavaScript:
# http://jsbeautifier.org/
# Grunt wrapper
# https://www.npmjs.com/package/grunt-jsbeautifier
# Options:
# https://www.npmjs.com/package/js-beautify#options
# [BUG] “wrap_line_length: 0” required:
# https://github.com/vkadam/grunt-jsbeautifier/issues/64
module.exports =
	options:
		config: ".jsbeautifyrc"
		js:
			# Different file types:
			# https://www.npmjs.com/package/grunt-jsbeautifier#3-beautify-files-other-than-js-json-es6-css--html
			fileTypes: [
						".csslintrc"
						".jsbeautifyrc"
						".htmlhintrc"
						".htmllintrc"
						".stylintrc"
						]
	files: [
			"<%= templates.yamlconfig.OUTPUT_PATH %>/**/*.{html,css,js,json}"
			]
