# passwordGen

Password Generator

![alt text](https://khendersonpc.github.io/passwordGen/Screen%20Shot%202020-12-20%20at%206.01.10%20PM.png)

Description:
This is a password generator. The user can select how many characters they'd like and if they'd like to include uppercase, lowercase, special characters or numbers. Then, the user clicks on the "generate password" button and a passoword is generated and returned to the screen.

Technologies Used
This was created using HTML, CSS and JavaScript. The focus of the project was the JavaScript file.

I faced MANY problems. Originally, I built a program that used individual lists of all of the options. I was going to build the string on what the selected, but you got caught up in making sure it was random (what was selected, the order that was selected and the numbers of each choice selected. For instance, if the user chose 10 characters and numbers/symbols/lowercase. How do I ensure that the number of each added is different every time?). 

Anyways, it took me a long time to realize that it'd be easier to negate things and at the same time ensure that it was random. I made it so that there is a HUGE lists of all options. Then, a random character from that list is selected. THEN, it goes through the conditionals and if it meets the specifications (like a lowercase letter or a number), then it is added.

I choose not to user alerts and prompts. I could definitely do that, but they are so ugle and I wanted to learn about how the JS file and forms interact i.e. how to save info from the HTML file into the JS file.
