var word = ['F', 'O', 'X'];
var goodWord = ['-', '-', '-'];
var counter = 0;

var que = function(){
    return prompt('What is your Guess?');
}

var guessLetter = function(guess) {
    while (counter < word.length -1) {
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
            debugger
            window.alert(goodWord);
            var darn = window.prompt("Darn! Maybe next time. Guess again!");
            guessLetter(darn);
        }
        if (counter == word.length) {
            counter += 1;
            window.alert("Yay! You got it! Nice Job!");
        }
    }
}

// guessLetter(que);

$( document ).ready(function() {
    console.log("this is the right one")

    $('.level1').on("click", function(){
        var awesome = que();
        console.log(awesome)
        guessLetter(awesome)

    });
});
