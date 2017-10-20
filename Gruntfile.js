'use strict';

module.exports = function (grunt) {

    // Load all Grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration
    grunt.initConfig({

        watch: {
            templates: {
                files: ['*.html', 'craft/templates/**/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            images: {
                files: ['assets/images/**/*.*'],
                tasks: ['clean:images', 'copy:images'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            stylesheets: {
                files: ['assets/stylesheets/**/*.css',
                        'assets/stylesheets/**/*.scss'],
                tasks: ['sass:dist', 'autoprefixer', 'copy:stylesheets'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            scripts: {
                files: [
                    'assets/javascripts/vendor/*/*.js',
                    'assets/javascripts/app/**/*.js'],
                tasks: ['clean:javascripts', 'babel', 'concat:dist', 'copy:javascripts'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            grunt: {
                files: ['Gruntfile.js']
            }
        },

        sass: {    
            dist: {
                options: {
                  style: 'expanded'
                },
                files: {
                    'assets/stylesheets/app.css': 'assets/stylesheets/app.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 11', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: ['assets/stylesheets/app.css'],
                dest: 'assets/stylesheets/'
            }
        },

        cssmin: {
            dist: {
                options: {
                    report: 'min'
                },
                files: {
                    'public/stylesheets/app.min.css': [
                        'assets/stylesheets/app.css'
                    ]
                }
            }
        },

        babel: {
            options: {
                "sourceMap": false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "assets/javascripts/app/",
                    src: ["*.js", "block/*.js"],
                    dest: "assets/javascripts/compiled/"
                }]
            }
        },

        concat: {
            dist: {
                files: {
                    'assets/javascripts/app.js': [
                        "assets/javascripts/app/vendor/**/*.js", 
                        "assets/javascripts/compiled/**/*.js"
                    ]
                }
            }
        },

        uglify: {
            options: {
                report: 'min'
            },
            dist: {
                files: {
                    'public/javascripts/app.min.js': [
                        'assets/javascripts/app.js'
                    ]
                }
            }
        },

        clean: {
            images: ["public/images/*"], 
            javascripts: ["assets/javascripts/app.js", "assets/javascripts/compiled/**/*", "public/javascripts/*"]
        },

        copy: {
            images: {
                expand: true,
                cwd: "assets/images/",
                src: "**/*.*",
                dest: "public/images/"
            },
            stylesheets: {
                expand: true,
                cwd: "assets/stylesheets/",
                src: "*.css",
                dest: "public/stylesheets/"
            },
            javascripts: {
                expand: true,
                cwd: "assets/javascripts/",
                src: "app.js",
                dest: "public/javascripts/"
            }
        }

    });

    grunt.registerTask('build', [
        'sass:dist',
        'autoprefixer',
        'cssmin:dist',
        'clean:javascripts',
        'babel',
        'concat:dist',
        'uglify:dist',
        'clean:images',
        'copy:images',
        'copy:stylesheets',
        'copy:javascripts'
    ]);

    grunt.registerTask('default', ['watch']);
};