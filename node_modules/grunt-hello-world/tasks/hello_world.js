/*
 * grunt-hello-world
 * https://github.com/kafis/grunt-hello-world
 *
 * Copyright (c) 2015 kfischer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('hello_world', 'Says Hello on the console to a specified subject. For tutorial purposes.', function() {
    var greeting = this.data.name;
    grunt.log.writeln("Hello "+greeting);
  });

};
