Text-based Games
================

It's hard to keep in mind now that graphics can be almost completely realistic but it wasn't that long ago that there were no graphics. People still had video games of course but they played them entirely with text. Rather than using your mouse, or touching things, you would have to type in commands and rather than seeing monsters you would just get a description.

![Text-based game](http://core0.staticworld.net/images/article/2013/01/colossalcaveadventure1-100023877-orig.jpg)

In fact, let's take a few minutes and play one now to get familiar with it.

Take five minutes and [play this game now](https://rawgit.com/secretGeek/console-adventure/master/console.html). Press <kbd>F12</kbd> to open up your browser's console. Follow the instructions in there (hint: type *help()* to get a list of all commands you can type). Move around, try to see how far you can get, you can always reset the game by refreshing your browser tab.

---

Fun-ish, right?

So what's going on here? Did you realize that you were just typing javascript? What is going on when you type `north()` or `speak()`? That's a part of javascript we've worked with before.

Developer Tools
===============

But what is this thing that opened when we hit <kbd>F12</kbd>? It doesn't really look like part of a web page. In fact it is not, you've just found the Developer Tools. This is something available in every web browser and on every web page. You can use it to see how the web page is built, how it behaves, and even modify the page's HTML, CSS, and Javascript. We will be using it a lot. In fact, let's open a different web page like Wikipedia and open the developer tools there (hit <kbd>F12</kbd> or <kbd>Ctrl</kbd>\+<kbd>Shift</kbd>\+<kbd>C</kbd>\)

What is important for us though, you can use the developer tools console to see any messages the developer of the web page added that a regular user won't see. This is very useful while creating web pages since you can write code that outputs messages to the console for you to understand what's going on in code that's not visible. Try writing a message to the console now. Type something like this into it

```js
console.log("My name is George and I'm", 32, "years old");
```

Hit enter and you'll see it prints that message back.

![`console.log` output](http://content.screencast.com/users/togakangaroo/folders/Jing/media/37231651-3a0e-40bb-9bd3-d6075fc6e83b/2015-04-18_1128.png)

That's not terribly useful until we combine it with an application. Let's open up our bouncing box application for example. Inside the update function add the following line

```js
console.log("the speed is currently", speed, "the position is", position);
```

Now run the bouncing box application. To be able to open the console correctly you'll have to pop the tab out of your page.

![Button to pop the tab out is to the right of the url](http://content.screencast.com/users/togakangaroo/folders/Jing/media/b4c30169-e124-4d71-aac3-41b8d765f98c/2015-04-18_1133.png)

When you're on the page you should be able to hit <kbd>F12</kbd> and see your messages! Modify the `console.log()` function call above so that you can see the current direction as well.

Let's Make Hangman
==================

In order to get experience using the developer tools, and writing more code let's make a simple text-based game. Rather than make an RPG let's make Hangman.

![Hangman](http://content.screencast.com/users/togakangaroo/folders/Jing/media/e5486f3b-608f-43d9-9a55-775ddda5b727/2015-04-18_1144.png)

Let's play a couple quick rounds together. *(note to teachers: write each line on the board separately)*

```
the phrase is
----- -- -------
```

Let's guess (e)

```
-e--- -- -------
```

Let's guess (n)

```
-e--- -- -------
```

Let's guess (r)

```
-e-r- -- -r--r--
```

When I write out this line, for each letter how do I know whether to write a letter, a dash, or a space? Try to come up with this *algorithm* now.

---

We should get something like this:

```
When displaying current phrase
  for each letter in the phrase
    if it has been guessed output the letter
    if it is a space output a space
    otherwise output a "-"
```

Great, we just figured out most of hangman. Now let's translate that to something the computer will understand!

Open up your website workspace and

```bash
os install hangman
```

Now open up the index.html file inside of the hangman folder, this is where you will be working today.

1 - Create a Phrase
-------------------

Let's start really simple. In the Javascript Declare a variable called `phrase`, store any phrase you want inside of it, and output to the console.

```js
var phrase;
phrase = "learn to code";
console.log("The secret phrase is", phrase);
```

Save the file, run the application and view the message in the console.

2 - Display the Phrase as dashes.
---------------------------------

Let's write some code to display the current phrase with dashes.

```
----- -- ----
```

*For this section we're going to add code inside the `displayCurrent` function.* Let's do a simplified version of our algorithm from above

```
for each letter in the phrase
  if it is a space output a space
  otherwise output a "-"
```

Remember how we told you that jQuery was a library that someone created to make it easy to work with web pages? We did the same thing for you to make it easy to create a hangman game. To do something with each letter you can do something like

```js
var currentPhrase = hangman.forEachCharacter(phrase, function(character) {
    return "a";
});
console.log("current phrase is", currentPhrase);
```

Change the code inside of `displayCurrent` to say this and view the results in the console.

But we can do more than that! We can use the `if` keyword on each character.

```js
var currentPhrase = hangman.forEachCharacter(phrase, function(character) {
  if(character === " ") {
    return "a";
  } else {
    return "b";
  }
});
console.log("current phrase is", currentPhrase);
```

What will this print? Modify the code so that if it's a space it outputs a space, otherwise it outputs a dash.

In order to see what functions are available type `hangman` into the console and hit enter.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
