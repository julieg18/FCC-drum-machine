$(document).ready(function() {
  $(document).keydown( function(pressedKey) {
    let keyCode = pressedKey.keyCode;
    switch(keyCode) {
      case (81):
      playAudio("Q");
      printPhrase("Heater 1");
      break;
      case (87):
      playAudio("W");
      printPhrase("Heater 2");
      break;
      case (69):
      playAudio("E");
      printPhrase("Heater 3");
      break;
      case (65):
      playAudio("A");
      printPhrase("Heater 4");
      break;
      case (83):
      playAudio("S");
      printPhrase("Clap");
      break;
      case (68):
      playAudio("D");
      printPhrase("Open HH");
      break;
      case (90):
      playAudio("Z");
      printPhrase("Kick n' Hat");
      break;
      case (88):
      playAudio("X");
      printPhrase("Kick");
      break;
      case (67):
      playAudio("C");
      printPhrase("Closed HH");
      break;
    }
  });
});


function playAudio(key) {
  $(`#${key}`)[0].play()
}

function printPhrase(phrase) {
  $('#keyString').html(`<p>${phrase}</p>`)
} 
