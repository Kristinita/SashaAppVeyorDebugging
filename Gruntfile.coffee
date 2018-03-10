module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-hello-world')

	grunt.initConfig

		hello_world:
			world:
				name: "world!"
