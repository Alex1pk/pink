module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.initCongif({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		}

	});
};