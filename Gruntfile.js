module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    react: {
      single_file_output: {
        files: {
          'public/js/react/dashboard.js': 'public/js/react/dashboard.jsx'
        }
      }
    },

    watch: {
      files: ['public/**/*.jsx'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['react', 'watch']);
};
