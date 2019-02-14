

$(document).ready(function() {
  $("h1").css("color", "yellow");
  $(document).keydown( function(pressedKey) {
    let keyCode = pressedKey.keyCode;
    switch(keyCode) {
      case (81):
      playAudio("qKey");
      print("qKey");
      break;
      case (87):
      playAudio("wKey");
      print("wKey");
      break;
      case (69):
      playAudio("eKey");
      print("eKey");
      break;
      case (65):
      playAudio("aKey");
      print("aKey");
      break;
      case (83):
      playAudio("sKey");
      print("sKey");
      break;
      case (68):
      playAudio("dKey");
      print("dKey");
      break;
      case (90):
      playAudio("zKey");
      print("zKey");
      break;
      case (88):
      playAudio("xKey");
      print("xKey");
      break;
      case (67):
      playAudio("cKey");
      print("cKey");
      break;
    }
  });
  });


function playAudio(key) {
  switch(key) {
    case "qKey":
      document.getElementById("Q").play();
      break;
    case "wKey":
      document.getElementById("W").play();
      break;
    case "eKey":
      document.getElementById("E").play();
      break;
    case "aKey":
      document.getElementById("A").play();
      break;
    case "sKey":
      document.getElementById("S").play();
      break;
    case "dKey":
      document.getElementById("D").play();
      break;
    case "zKey":
      document.getElementById("Z").play();
      break;
    case "xKey":
      document.getElementById("X").play();
      break;
    case "cKey":
      document.getElementById("C").play();
  }
}

function print(key) {
  switch(key) {
    case "qKey":
      document.getElementById("keyString").innerHTML = "Heater 1";
      break;
    case "wKey":
      document.getElementById("keyString").innerHTML = "Heater 2"
      break;
    case "eKey":
      document.getElementById("keyString").innerHTML = "Heater 3."
      break;
    case "aKey":
      document.getElementById("keyString").innerHTML = "Heater 4"
      break;
    case "sKey":
      document.getElementById("keyString").innerHTML = "Clap"
      break;
    case "dKey":
      document.getElementById("keyString").innerHTML = "Open HH"
      break;
    case "zKey":
      document.getElementById("keyString").innerHTML = "Kick n' Hat"
      break;
    case "xKey":
      document.getElementById("keyString").innerHTML = "Kick"
      break;
    case "cKey":
        document.getElementById("keyString").innerHTML = "Closed HH"
      }
}

