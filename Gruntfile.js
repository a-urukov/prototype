module.exports = function(grunt) {

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'nyan',
                    require: 'coffee-script/register'
                },
                src: [
                    'tests/specs/**/*.spec.coffee',
                    'tests/specs/**/*.spec.js'
                ]
            }
        },
        watch: {
            test: {
                files: '<%= mochaTest.test.src %>',
                tasks: ['mochaTest:test']
            }
        }
    });

    // установка npm пакетов
    grunt.registerTask('npm', function() {
        execSequenceCmds([
            { cmd: 'npm cache clean -f' },
            { cmd: 'npm prune' },
            { cmd: 'npm install' }
        ], 'install npm packages', this.async());
    });

    // установка библиотек через bower
    grunt.registerTask('bower', function() {
        execCmd(BIN_PATH + 'bower --accept-root install', 'install bower packages', this.async());
    });
};
