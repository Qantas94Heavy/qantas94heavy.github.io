---
layout: default
---

## About me

My name's Karl Cheng, and I'm a Year 12 student at the Australian International School Hong Kong
(AISHK).

I'm always on the lookout for new ways to do things, and I love to learn about a wide variety of
subjects and how they apply to the real world. It's especially motivating when my work is actually
able to help others, as well as being appreciated for my efforts. I also find it useful to be
interested in the general field of the subject I'm learning about.

### Skills and Interests

In my free time I:

 - Try to find interesting objects or locations to photograph.
 - Go to tennis classes on the weekend to stay active.
 - Create various websites and applications in JavaScript, HTML and CSS.
 - Help to contribute to the Linux community by updating packages.

This year I'm participating in the school musical production [_The Sound of Music_][SOM], which has
provided me with an opportunity to enhance my acting and singing skills in a different environment.
As well as challenging me to push myself in new situations, it also allows me to improve my ability
to communicate with others more effectively, crucial in today's connected society.

I'm also interested in the aviation industry, as well as being an avid supporter of civil rights,
such as free speech.

  [SOM]: http://soundofmusic.aishk.edu.hk

### Programming

My favourite programming language is JavaScript, followed closely by Python (it would be if I could
use it client-side). I'm currently learning how to use Rust, which requires quite a different
mindset, but its unique model does make it quite pleasant to use once you get the hang of it.

You can see a few of my works in my [portfolio]({{ site.baseurl }}/portfolio.html).

#### How I got started

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
