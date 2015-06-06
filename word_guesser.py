var word = ['F', 'O', 'X'];
var goodWord = ['-', '-', '-'];
var counter = 0;

var que = window.prompt('What is your Guess?');

function guessLetter(guess) {

    while (counter < word.length - 1) {
        var goOn = false;
        for (var x = 0; x < word.length; x++) {
            if (guess == word[x]) {
                goodWord[x] = guess;
                counter += 1;
                goOn = true;
            }
        }
        if (goOn) {
            window.alert(goodWord);
            var yay = window.prompt('Yay! You got one! What is your next Guess?');
            guessLetter(yay);
        }
        if (goOn === false) {
            window.alert(goodWord);
            var darn = window.prompt("Darn! Maybe next time. Guess again!");
            guessLetter(darn);
        }
        if (counter == word.length - 1) {
            window.alert("Yay! You got it! Nice Job!");
        }
    }
}

// initial call
guessLetter(que);