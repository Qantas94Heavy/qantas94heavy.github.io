---
layout: default
---

## About me

My name's Karl Cheng, and I'm a Year 11 student at the Australian International School Hong Kong (AISHK).

I'm always on the lookout for new ways to do things, and I love to learn about new developments in ideas. It's especially self-motivating when my work is actually appreciated by someone in the real world. I also find it useful to be interested in the general field of the subject I'm learning about.

### Skills and Interests

In my free time I:

 - Participate in an after-school debating club at school (being unafraid to provide my opinion on contraversial topics does help).
 - Go to tennis classes on the weekend to stay active.
 - Create various websites and applications in JavaScript, HTML and CSS.
 
I'm also interested in the aviation industry, as well as being an avid supporter of civil rights, such as free speech.

### Programming

My favourite programming language is JavaScript, followed closely by Python (it would be if I could use it client-side). I don't know too many other programming languages, though I'm currently learning how to use Rust, which requires quite a different mindset.

You can see a few of my works in my [portfolio]({{ site.baseurl }}/portfolio.html).

#### How I got started

I first started developing at school with VB6, where we were asked to develop various boxes using exercises given by my teacher. I didn't find it too interesting and found the syntax rather cumbersome.

A year and a half later, I was looking at an online game and found that Firebug show various variables that could be edited via a graphical interface on the "DOM" tab. Eventually I figured out that you could use the dot notation syntax to access and assign to these variables which controlled how the game worked, and that this was part of JavaScript.

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
    
From there I developed the code further, adding various features until I was able to release the code as an extension for Google Chrome, which exists today as [Autopilot++](https://github.com/Qantas94Heavy/autopilot-pp).