module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-hello-world')

	grunt.initConfig

		hello_world:
			world:
				name: "world!"

	grunt.registerTask 'default', [
		'hello_world'
	]

	grunt.registerTask 'publish', [
		'hello_world'
	]
