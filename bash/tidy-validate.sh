#!/bin/bash
# @Author: Kristinita
# @Date:   2018-03-07 14:42:36
# @Last Modified by:   Kristinita
# @Last Modified time: 2018-04-28 08:53:02
#############
# HTML Tidy #
#############
# [INFO] Validation all HTML files:
# https://unix.stackexchange.com/a/428022/237999
# [INFO] Recursive glob:
# https://unix.stackexchange.com/a/49917/237999
shopt -s globstar
validall=true
# [INFO] Using variables in script:
# http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
for f in output/**/*.html
	do
	if tidy -config ./tidy.conf --markup no "$f"
		then
		echo "$f" valid
	else
		validall=false
		echo "$f" not valid! Please, fix it!
	fi
done
$validall
