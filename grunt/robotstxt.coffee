######################
## grunt-robots-txt ##
######################
# Generate robots.txt file:
# https://www.npmjs.com/package/grunt-robots-txt
# https://yandex.ru/support/webmaster/controlling-robot/robots-txt.html?lang=en
# https://support.google.com/webmasters/answer/6062608?hl=en
# Typical errors:
# http://robotstxt.org.ru/robotstxterrors
module.exports =
	dist:
		dest: "<%= templates.yamlconfig.OUTPUT_PATH %>/"
		policy: [
			{
				ua: '*'
				disallow: [ '/images/'
				'/js/'
				'/css/'
				'/Smert-svobode/'
				'/Snippets/'
				'/stylus/'
				'/zohoverify/'
				]
			}
			{
				ua: 'LinkChecker'
				allow: '/'
			}
				# I don't use Host directive, because Kristinita's Search haven't mirrors:
				# https://yandex.ru/support/webmaster/controlling-robot/robots-txt.html#host
				# Sitemap directive:
				# https://yandex.ru/support/webmaster/controlling-robot/robots-txt.html#sitemap
				sitemap: "<%= templates.yamlconfig.SITEURL %>/sitemap.xml"
				# Crawl-delay directive:
				# https://yandex.ru/support/webmaster/controlling-robot/robots-txt.html#crawl-delay
				crawldelay: 1
			]
