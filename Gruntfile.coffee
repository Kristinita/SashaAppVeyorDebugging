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
			"gh-pages":
				command: "npx gh-pages --branch KiraBranchForDeployment --dist KiraFolderForDeployment --dotfiles --nojekyll --repo
							https://<%= templates.tokens.kiraTokenGitLabForGhPages %>@github.com/Kristinita/KristinitaTests.github.io"

		templates:
			tokens:
				kiraTokenGitLabForGhPages: kiraDotenvxObject.get "TOKEN_GITHUB_FOR_GH_PAGES"
