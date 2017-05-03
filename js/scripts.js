var userInput ;
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var letters = [vowels + consonants];
var word ;
var word2 ;

var consonant ;

$(function() {

//collect user input//

  $("#formOne").submit(function(event) {
    userInput = $("#sentence").val();

    word = userInput;

    for (var index = 0; index < vowels.length; index += 1) {

      if (word[0] === vowels[index]) {
        word2 = word += "way"

      }

      if (word[0] === vowels[index]) { break };

      if  (word[0] !== vowels[index]) {
        consonant = word.charAt(0).slice(-1);
        word2 = word.replace(word[0],"") + consonant + "ay";

      }

      else if (word[1] !== vowels[index]) {
         consonant = word.charAt(0).slice(-1);
         consonant2 = word.charAt(1).slice(-1);
         word2 = word.replace(word[0], "").replace(word[1], "") + consonant + consonant2 + "ay";

      }

       else if (word[2] !== vowels[index]) {
          consonant = word.charAt(0).slice(-1);
          consonant2 = word.charAt(1).slice(-1);
          consonant3 = word.charAt(2).slice(-1);
          word2 = word.replace(word[0], "").replace(word[1], "").replace(word[2], "") + consonant + consonant2 + consonant3 + "ay";

      }

      //
    }
      // }
    $("#pigLatin").text(word2);
    // // if (splitLetters#includes(!letters));
    // //   $("#hatwobble").show();

    event.preventDefault();

    // $("input")
  })
})
