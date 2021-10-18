---
layout: default
---

# About me

My name's Karl Cheng, and I'm a final year student and academic tutor studying
Actuarial Studies & Computer Science at UNSW Sydney.

I'm always on the lookout for new ways to do things, and I love to learn about a wide variety of
subjects and how they apply to the real world. It's especially motivating when my work is actually
able to help others, as well as being appreciated for my efforts. I also find it useful to be
interested in the general field of the subject I'm learning about.

## Experience

### University of New South Wales	(Sep 2019 – present)
_Academic Teacher (Casual)_
* Delivered engaging lessons about systems design and algorithms to classes of 20-24 students
* Developed course material to help cater for learning styles and support fundamental concepts
* Provided inquisitive feedback and troubleshooting during personalised HELP sessions

### Zip Co Limited	(Jan 2020 – Mar 2020)
Mobile Tech Intern
* Supported agile team in the development of the Zip Android application in Kotlin
* Coordinated with product team to suggest, implement and document app improvements
* Troubleshooted multiple high priority issues, including a key analytics tracking bug involving multiple third-party libraries
* Implemented key ‘refer a friend’ growth feature, interfacing with AWS cloud services
    
### Google Summer of Code participant with Babel	(May 2017 – Aug 2017)
_Software Developer Intern_
* Software used by over 17 million users/month and major firms (Facebook, PayPal, Netflix)
* Implemented new JavaScript standard feature proposals for major new release (Babel 7)
* Collaborated with QA team to develop regression tests to reduce non-compliance issues

## Skills and Interests

In my free time I:

 - Try to find interesting objects or locations to photograph.
 - Go to tennis classes on the weekend to stay active.
 - Create various websites and applications in JavaScript, HTML and CSS.
 - Contribute to the Linux community by updating software repository packages.

## Programming

My favourite programming language is JavaScript, followed closely by Python (it would be if I could
use it client-side). I'm currently learning how to use Rust, which requires quite a different
mindset, but its unique model does make it quite pleasant to use once you get the hang of it.

You can see a few of my works in my [portfolio]({{ site.baseurl }}/portfolio.html).

### How I got started

I first started developing at school with VB6, where I created various GUI boxes using exercises
given by my teacher. I didn't find it too interesting and found the syntax rather cumbersome.

A year and a half later, I was looking at an online game and found that Firebug show various
variables that could be edited via a graphical interface on the "DOM" tab. Eventually I figured out
that you could use the dot notation syntax to access and assign to these variables which controlled
how the game worked, and that this was part of JavaScript.

This led to me learning JavaScript, first developing a simple script:

    setInterval(function () { testAutopilot(); }, 1000);

    function testAutopilot() {
        if (ges.aircraft.animationValue.aroll > 0.5) {
            controls.roll = 0.03;
        }
        else if (ges.aircraft.animationValue.aroll < -0.5) {
            controls.roll = -0.03;
        }
        else {
            controls.roll = 0;
        }
    }

From there I developed the code further, adding various features until I was able to release the
code as an extension for Google Chrome, which exists today as
[Autopilot++](https://github.com/Qantas94Heavy/autopilot-pp).
