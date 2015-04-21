(function(){
		'use strict'

		/////////////////////////////////////////////////
		// Variable declaration
		/////////////////////////////////////////////////
		var charactersGuessed;
		var recordGuess;
		var toArray;
		var hasBeenGuessed;
		var forEachCharacter;
		var cornifyOnce;
		var cornify;
		var includeCornify

		/////////////////////////////////////////////////
		// Variable initialzation
		/////////////////////////////////////////////////
		charactersGuessed = [];

		recordGuess = function(character) {
			if(typeof(character) != 'string' || character.length != 1) {
				throw Error("recordGuess function takes one argument which must be a single character. Example: recordGuess(\"a\")")
			}
			charactersGuessed.push(character);
			console.log("Guessed so far:", charactersGuessed);
		}
		toArray = function(obj) {
			return Array.prototype.slice.call(obj)
		};
		hasBeenGuessed = function(character) {
			if(typeof(character) != 'string' || character.length != 1) {
				throw Error("hasBeenGuessed function takes one argument which must be a single character. Example: hasBeenGuessed(\"a\")")
			}
			return charactersGuessed.indexOf(character) != -1
		}
		forEachCharacter = function(str, fn) {
			var letters, mappedLetters
					;
			letters = toArray(str);
			mappedLetters = letters.map(fn);
			return mappedLetters.join('');
		}
		includeCornify = function() {
			var cornifyScript, files
				;
			cornifyScript=document.getElementById('__cornify_nodes');
			files=[
				'cornify/cornify.js',
				'cornify/cornify_run.js'
				];
			if(!cornifyScript) {
				cornifyScript=document.createElement('div');
				cornifyScript.id='__cornify_nodes';
				document.querySelector('body').appendChild(cornifyScript);
				files.map(function(file){
						var includeCornifyScript;
					includeCornifyScript=document.createElement('script');
					includeCornifyScript.src=file;
					cornifyScript.appendChild(includeCornifyScript);
				});
			}
		}
		cornifyOnce = function(){
			var tryAddCornify;
			tryAddCornify = function() {
					if(window.cornify_add) {
							window.cornify_add();
							return;
					}
					setTimeout(tryAddCornify, 500);
			}
			includeCornify();
			tryAddCornify();
		}
		cornify = function(times) {
      if(times === undefined) {
        times = 5;
      }
			for(var counter = 0; counter < times; counter += 1) {
					cornifyOnce();
			}
		}
		/////////////////////////////////////////////////
		// Export variables
		/////////////////////////////////////////////////
		window.hangman = {
        // Records a guess as having happened. Pass exactly one character to this function.
				recordGuess: recordGuess,
				forEachCharacter: forEachCharacter,
				hasBeenGuessed: hasBeenGuessed,
				cornify: cornify,
		};
}).call();
