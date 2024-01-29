---
layout: wwwizzzard
title: WWWiZZZard!
---

#### Missed a big sale?
#### Your favorite band's concert sold out?
#### Missed a prestigious conference's Call for Papers?

#### Imagine never missing another website change.
#### Introducing . . .

# WWWizzzard:
### It checks the WWW while you zzz!

<img src="/assets/img/computer-wizard.png" alt="wizard using a computer" style="float: left; max-width: 45%">
<img src="/assets/img/boy-sleeping-in-bed.png" alt="boy sleeping in bed" style="float: right; max-width: 45%">

<br clear="both">

Give WWWizzzard a URL to check,
and tell it how often: hourly, daily, weekly, or monthly.&nbsp;
When it detects a change<sup>1</sup>,
you get an email including the changes.&nbsp;
And you get 31 checks per month (totaled over all your URLs), for _free_,
with more for a mere one cent (US) each _or less!_<sup>2</sup>&nbsp;
Never miss another sale, concert, CfP, or other such anticipated announcement!
{:class="big"}

Sound good to you?&nbsp;
Send your email address
to wiz-{{ "now" | date: "%Y" }} at this domain,
to be notified when it's ready!&nbsp;
Also feel free to send feedback on the whole idea!&nbsp;
(Sorry not to put my address together for you,
but I get quite enough spam already!)
{:class="big"}

I already have the basic "guts" of it working as a command-line app.&nbsp;
Mainly, I need to add separate user accounts
(including letting you buy and use credits),
wrap it all as a web-app,
and arrange hosting.&nbsp;
So, it should be ready pretty soon,
probably by Q3 of 2024!
{:class="big"}

Features already working in the command-line Proof-of-Concept include:
- Basic change detection and reporting
- Follow redirects and refreshes
- Case insensitivity
- Ignore changes in whitespace, including linebreaks
- Ignore parts matching some criterion
- Ignore a site until a specified date
- Include (and check for changes in) names of external files

Other planned options include:
- Report only additions, omitting removals and old versions from changes
- Case sensitivity
- Check _only_ parts matching some criterion
- Check contents of element options, and inline scripts, CSS, etc.
- Check contents of external files<sup>3</sup> 
- Notification by SMS<sup>3</sup>
- Notification to an "inbox" _here_<sup>3</sup>
- Follow links to other pages on site and check _them_ for changes<sup>3</sup>

<sup>1</sup> Not all changes will be detectable.&nbsp;
In particular, WWWizzzard will _not_ execute JavaScript,
which may affect the site's final contents.&nbsp;
Nor will WWWizzzard check applied styles,
nor currently HTML element options,
contents of inline scripts/styles,
nor of external files.&nbsp;
Such things _may_ be available later,
as an option,
incurring additional checking costs per external file.&nbsp;
Visual comparison of images is extremely unlikely,
and if it does happen, will not be so cheap.
{:class="small"}

<sup>2</sup> _Planned_ pricing so far (not guaranteed):
{:class="small"}
- 31 checks per month for free
- Additional checks for 1 "credit"
- Credits purchased in "packs" of 100/200/500/etc. up to 1M
- Smallest "pack" is 1 cent/credit, with discounts or bonuses for larger packs
{:class="small"}

<sup>3</sup> For an extra cost, TBD but probably just an extra credit each,
_recursively_.
{:class="small"}

<small>
Image credits:<br>
sleeping person adapted from https://vectorportal.com/vector/boy-sleeping-in-bed-vector-clip-art/29752;<br>
wizard untraceable, there are copies all over the web, but I found no pointers to the creator; if you happen to know, please tell me.
</small>
