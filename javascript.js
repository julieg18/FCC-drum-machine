$(document).ready(function() {
  $(document).keydown( function(pressedKey) {
    let keyCode = pressedKey.keyCode;
    switch(keyCode) {
      case (81):
      $('#Q-btn').click()
      changeBkrColor('blue', 'Q')
      break;
      case (87):
      $('#W-btn').click()
      changeBkrColor('blue', 'W')
      break;
      case (69):
      $('#E-btn').click()
      changeBkrColor('blue', 'E')
      break;
      case (65):
      $('#A-btn').click()
      changeBkrColor('yellow', 'A')
      break;
      case (83):
      $('#S-btn').click()
      changeBkrColor('yellow', 'S')
      break;
      case (68):
      $('#D-btn').click()
      changeBkrColor('yellow', 'D')
      break;
      case (90):
      $('#Z-btn').click()
      changeBkrColor('orange', 'Z')
      break;
      case (88):
      $('#X-btn').click()
      changeBkrColor('orange', 'X')
      break;
      case (67):
      $('#C-btn').click()
      changeBkrColor('orange', 'C')
      break;
    }
  });
});


function playAudio (key) {
  $(`#${key}`)[0].play()
}

function printPhrase (phrase) {
  $('#key-string').html(`<p>${phrase}</p>`)
}

function changeBkrColor (color, letter) {
  $(`#${letter}-btn`).addClass(`add-${color}-bkr`)
  const remove = () => $(`#${letter}-btn`).addClass('remove-bkr')
  setTimeout(remove, 250)
  $(`#${letter}-btn`).removeClass('remove-bkr')
}