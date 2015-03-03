module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jscs: {
            src: 'app/js/*.js',
            options: {
                config: '.jscsrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jscs']);

};