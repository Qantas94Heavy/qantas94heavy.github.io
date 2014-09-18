### How I got started

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
