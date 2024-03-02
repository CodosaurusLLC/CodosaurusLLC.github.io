---
layout: wwwizzzard
title: WWWiZZZard!
---

##### Missed a big sale?
##### Your favorite band's concert sold out?
##### Missed a prestigious conference's Call for Papers?
##### Didn't know the lottery had a huge jackpot?
<br>
#### Imagine never missing another website change.
<br>
### Introducing . . .
<br>
# <big>WWWizzzard:</big>
#### It checks the WWW while you zzz!

<br>
<center>
<img src="/assets/img/wizard-and-sleeper-from-bard-tweaked.jpg" alt="wizard using a computer while someone sleeps in the background" style="max-width: 90%">
</center>

Give WWWizzzard a URL to check, and tell it how often.&nbsp;
When it detects a change of status or content<sup>1</sup>,
you get an email including the changes.&nbsp;
And you get 31 checks per month
(so you can monitor one site daily, _or_ more sites less often),
for _free_, with more for a mere _one cent_ (US) each!&nbsp;
Never miss another important announcement!
{:class="big"}

Sound good to you?&nbsp;
Send your email address
to T.Rex-{{ "now" | date: "%Y" }} at this domain,
to be notified when it's ready!&nbsp;
Also feel free to send feedback on the whole idea!&nbsp;
(Sorry not to put my address together for you,
but I get quite enough spam already, thankyouverymuch.)
{:class="big"}

I already have the basics working as a command-line app,
giving its output on the screen rather than an email.&nbsp;
I just need to add separate user accounts
(including letting you buy and use checking credit),
make it send email,
wrap it all as a web-app,
and arrange hosting.&nbsp;
So, it should be ready pretty soon,
probably by Q3 of 2024!
{:class="big"}

Features already working in the command-line Proof-of-Concept include:
- Basic change detection and reporting, for most visible elements of HTML files
- Follow redirects and refreshes
- Ignore changes in whitespace, including linebreaks
- Ignore a site until a specified date
- Ignore parts matching certain criteria
- Include (and check for changes in) _names_ of linked files, such as image or script sources, and link destinations

Other planned options include:
- Check contents of the HTML header (scripts, styles, etc.)
- Report only additions, omitting removals and old versions from changes
- Case insensitivity
- Check _only_ a part matching some criterion
- Check contents of _more_ HTML element attributes
- Check contents of inline scripts, styles, etc.
- Check contents of other types of files such as plain text, JSON, XML, scripts, styles, etc.

Other ideas I may implement, if there is demand, include:
- Option to check more or less often if it detects a change or not, many times in a row
- Notification by SMS<sup>2</sup>
- Notification to an "inbox" _on the site_<sup>2</sup>
- Option to follow links to other pages on site and check _them_ for changes, maybe _recursively_<sup>2</sup>
- Option to report on invalid HTML<sup>2</sup>

<sup>1</sup> Not all changes will be detectable.&nbsp;
In particular, WWWizzzard will _not_ execute JavaScript,
which may affect the site's final contents.&nbsp;
(Sites that load major content via JS will therefore be uncheckable.)&nbsp;
Visual comparison of images is extremely unlikely,
and if it does happen, will not be cheap.
{:class="small"}

<sup>2</sup> For an extra cost, TBD but probably just an extra credit each,
_recursively_.
{:class="small"}

<small>Image credit: from Bard</small>
