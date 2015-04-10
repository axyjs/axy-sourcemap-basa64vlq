"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        typescript: {
            source: {
                options: {
                    declaration: false,
                    removeComments: false,
                    target: "ES5",
                    module: "commonjs"
                },
                src: "ts/*.ts"
            }
        },
        nodeunit: {
            all: ["test/*_test.js"]
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: ["ts/**/*.ts"]
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            test: "test/**/*.js",
            gruntfile: "Gruntfile.js"
        },
        jsonlint: {
            pkg: ["package.json"],
            hint: [".jshintrc"]
        }
    });

    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jsonlint");

    grunt.registerTask("move-js", function () {
        var fs = require("fs"),
            srcDir = __dirname + "/ts",
            destDir =  __dirname;
        fs.readdirSync(srcDir).forEach(function (bn) {
            if (bn.split(".").pop() === "js") {
                fs.renameSync(srcDir + "/" + bn, destDir + "/" + bn);
            }
        });
    });

    grunt.registerTask("build", ["typescript", "move-js"]);
    grunt.registerTask("hint", ["tslint", "jshint", "jsonlint"]);
    grunt.registerTask("test", ["nodeunit"]);
    grunt.registerTask("default", ["hint", "build", "test"]);
};
