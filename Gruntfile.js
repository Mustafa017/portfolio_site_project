module.exports = function (grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 300,
                        suffix: '_sm',
                        quality: 60
                    },{
                        width: 500,
                        suffix: '_md',
                        quality: 60
                    }]
                },

                files: [{
                expand: true,
                src: ['*.{gif,jpg,png}'],
                cwd: 'images_src/',
                dest: 'img/'
                }]
            }
        },
          /* Clear out the img and fonts directories if they exists */
        clean: {
            dev: {
                src: ['img','fonts']
            },
        },

          /* Generate the img and fonts directories if they are missing */
        mkdir: {
            dev: {
                options: {
                    create: ['img','fonts']
                },
            },
        },
          /* Copy the devicons fonts into  fonts/directory and css file to css/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'img/fixed'
                }]
            },
            devicons: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/devicons/fonts/',
                    src: ['*'],
                    dest: 'fonts/'
                },{
                    expand: true,
                    cwd: 'node_modules/devicons/css/',
                    src: ['devicons.css'],
                    dest: 'css/'
                }]
            },
        },
    });

    grunt.registerTask('default',['clean', 'mkdir', 'copy', 'responsive_images']);
};