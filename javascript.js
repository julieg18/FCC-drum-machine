

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
      document.getElementById("keyString").innerHTML = "I'm a q Key.";
      break;
    case "wKey":
      document.getElementById("keyString").innerHTML = "I'm a w key."
      break;
    case "eKey":
      document.getElementById("keyString").innerHTML = "I'm a e key."
      break;
    case "aKey":
      document.getElementById("keyString").innerHTML = "I'm a a key."
      break;
    case "sKey":
      document.getElementById("keyString").innerHTML = "I'm a s key."
      break;
    case "dKey":
      document.getElementById("keyString").innerHTML = "I'm a d key."
      break;
    case "zKey":
      document.getElementById("keyString").innerHTML = "I'm a z key."
      break;
    case "xKey":
      document.getElementById("keyString").innerHTML = "I'm a x key."
      break;
    case "cKey":
        document.getElementById("keyString").innerHTML = "I'm a c key."
      }
}
