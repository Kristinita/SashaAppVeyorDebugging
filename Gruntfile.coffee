module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config
		path: [
			".env.credentials"
		]
		strict: true

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		shell:
			# https://globster.xyz/?q=**%2F!(*.png%7C*.ts)&f=%2Fmyapp%2Freadme.md%2C%2Fmyapp%2Fconfig%2Fstaging.js%2C%2Fmyapp%2Fconfig%2Fproduction.js%2C%2Fmyapp%2Fsrc%2Fservices%2Futils.js%2C%2Fmyapp%2Fsrc%2Fservices%2Ftimezone.ts%2C%2Fmyapp%2Fsrc%2Fcontrollers%2Fhealth.js%2C%2Fmyapp%2Fsrc%2Fcontrollers%2Fuser.module.ts%2C%2Fmyapp%2Fassets%2Flogo.png%2C%2Fmyapp%2Fassets%2Flogo_small.png%2C%2Fmyapp%2Fassets%2Ffavicon.ico

			"gh-pages":
				command: "npx dotenvx run -- npx gh-pages --branch KiraBranchForDeployment
							--dist KiraFolderForDeployment --dotfiles
							--message \"Deployed from AppVeyor CI\"
							--nojekyll --repo
							https://Kristinita:<%= templates.tokens.kiraTokenForGhPages %>@github.com\
							/Kristinita/KristinitaTests.github.io
							--src \"**/!(*.@(crt|key))\"
							--user \"Kristinita <Kristinita@users.noreply.github.com>\""

		templates:
			tokens:
				kiraTokenForGhPages: kiraDotenvxObject.get "TOKEN_FOR_GH_PAGES"
