module.exports = function(grunt){
    //project configuration.

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            bootsrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            jquery:{
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js"
                ],
                "dest": "server/public/vendors/"
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Default Tasks
    grunt.registerTask('default',['copy','uglify']);
};