Title: typo-reporter
Status: published
Version: 0.2.1
Author: Sasha Chernykh
Date: 2018-03-22 7:52:14
Modified: 2020-09-24 13:12:49
Lang: en
Summary: Features, problems and it solutions, that not described in official typo-reporter Readme.
	![English typo-reporter form](https://i.imgur.com/U8pIw0a.png)
Pagetitle: typo-reporter
Pagecolors: it-articles
Asideimage: SashaGreenSweater
Iconleftorright: left
Tags: it-articles, spelling
Noco: 1vWK5
Og_image: https://i.imgur.com/U8pIw0a.png
Schemaorgtype: HowTo

<!-- MarkdownTOC -->

1. [Overview](#Overview)
1. [Demonstration](#Demonstration)
1. [Relevance](#Relevance)
1. [Limitations](#Limitations)
1. [Comparison](#Comparison)
1. [Getting formId](#Getting-formId)
1. [Mail forwarding](#Mail-forwarding)
	1. [Check mail forwarding](#Check-mail-forwarding)

<!-- /MarkdownTOC -->

<a id="Overview"></a>
# Overview

In this article I wrote typo-reporter:

+ features,
+ possibly problems and it solutions,

that not described in [official typo-reporter Readme](https://www.npmjs.com/package/typo-reporter).

<a id="Demonstration"></a>
# Demonstration

You can try use typo-reporter directly on this web page. Usage instructions see on [typo-reporter description](https://www.npmjs.com/package/typo-reporter).

+ English form example:

![English](https://i.imgur.com/U8pIw0a.png)

+ How does a webmaster see a new report:

![New report](https://i.imgur.com/jIik44n.png)

+ E-mail message for webmaster:

![typo-reporter mail](https://i.imgur.com/ZQdakQj.png)

+ Russian form example:

![Russian](https://i.imgur.com/lYPZMGU.png)

Styles, that I use for form in examples above:

+ [Stylus](https://github.com/Kristinita/KristinitaPelican/blob/master/themes/sashapelican/static/stylus/script-colors/typo-reporter/typo-reporter.styl),
+ [Compiled CSS](https://github.com/Kristinita/Kristinita.github.io/blob/master/theme/css/script-colors/typo-reporter/typo-reporter.css).

<a id="Relevance"></a>
# Relevance

This article is relevant for March 2018. In the future, the data in this article may be obsolete.

<a id="Limitations"></a>
# Limitations

typo-reporter limitations:

1. Works for PC, not for mobile devices.

That use typo-reporter on your site you need to have:

1. site, that support custom JavaScript and CSS inserting (some [website builders](https://websitesetup.org/website-builders/) don’t support this),
1. Google account.

<a id="Comparison"></a>
# Comparison

I use typo-reporter, not [Orphus](https://orphus.ru/en/) or another alternatives, because typo-reporter:

1. Open source,
1. Active maintained ([jquery.textmistake](http://tarampampam.github.io/jquery.textmistake/) project [closed](https://github.com/tarampampam/jquery.textmistake))
1. [Have technical support](https://github.com/psmb/typo-reporter/issues) ([Orphus community](https://orphus.ru/community/) spammed),
1. Support CDN — you need paste to your web page `#!html <script src="https://cdn.jsdelivr.net/npm/typo-reporter/lib/TypoReporter.min.js"></script>` ([CDN vs. local files](https://webmasters.stackexchange.com/a/92103/71131)).

	!!! warning
		NpmCDN, that [described in official documentation](https://www.npmjs.com/package/typo-reporter#install-via-plain-old-html-tag) hangs for me. I use [JSDelivr](https://www.jsdelivr.com/) CD instead.

<a id="Getting-formId"></a>
# Getting formId

!!! warning
	If you try get *formId* use [this method](https://productforums.google.com/forum/#!topic/docs/eoPN9F6KTs4), typo-reporter [will not work](https://github.com/psmb/typo-reporter/issues/4).

[Create your spreadsheet](https://www.npmjs.com/package/typo-reporter#create-a-target-google-form-to-gather-feedback) → *Form* → *Edit form* → *Send* → click to link icon → copy link below:

![formId link](https://i.imgur.com/cr8JNqT.png)

**For** link:

\ \ \ \ copy symbols between */e/* and */viewform* — it your *formId*.

**Example**:

+ your link — <https://docs.google.com/forms/d/e/1FAIpQLSfu5tnuHYKNPjH0n1fR9EmWDHwlFESzJj7JQFu_O5IS8G5R2A/viewform?usp=sf_link>,
+ your formId — *1FAIpQLSfu5tnuHYKNPjH0n1fR9EmWDHwlFESzJj7JQFu_O5IS8G5R2A*.

<a id="Mail-forwarding"></a>
# Mail forwarding

I don’t use GMail, because GMail move to Spam non-spam messages more often than another mail services ([example](https://productforums.google.com/forum/#!msg/gmail-ru/ydfMTF7IUec/4cJLmnSUFAAJ)). But “[notifications are solely sent to the email address associated with your Google account](https://productforums.google.com/d/msg/docs/YJ09uwy-pWU/g_1AJTXZN6QJ)”. That solve this problem I use [mail forwarding](https://support.google.com/mail/answer/10957?hl=en).

**Example** filter:

In your GMail [create a filter](https://support.google.com/mail/answer/6579?hl=en) with parameters:

+ *From* — *notify@google.com*;
+ *Has the words* — name of your spreadsheet;
+ *Forward it to:* — your forwarding e-mail;
+ check *Never Send it to Spam*.

![Filter 1](https://i.imgur.com/Nq0wB3c.png)
![Filter 2](https://i.imgur.com/G7YzdLi.png)

<a id="Check-mail-forwarding"></a>
## Check mail forwarding

After filter creating I recommend to make sure, that:

1. typo reports forwarded,
1. another e-mail messages not forwarded.

**Example** testing:

[jtable]
Send|Expected behavior for your forwarding e-mail
Example typo report on your site|Get [similar message](#Demonstration)
Any another message from another e-mail to your GMail mail|don’t get any message
[/jtable]
