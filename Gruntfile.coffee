module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config
		path: [
			".env"
			".env.credentials"
		]
		strict: true

	grunt.loadNpmTasks "grunt-shell-spawn"

	grunt.initConfig

		shell:
			"gh-pages":
				command: "npx dotenvx run -- npx gh-pages --branch KiraBranchForDeployment
							--dist KiraFolderForDeployment --dotfiles
							--message \"Deployed from AppVeyor CI\"
							--nojekyll --repo
							https://Kristinita:<%= templates.tokens.kiraTokenGitHubForGhPages %>@github.com\
							/Kristinita/KristinitaTests.github.io
							--user \"Kristinita <Kristinita@users.noreply.github.com>\""

		templates:
			tokens:
				kiraTokenGitHubForGhPages: kiraDotenvxObject.get "TOKEN_GITHUB_FOR_GH_PAGES"
