function winner(num1, num2) {
  if (num1 > num2) {
    document.querySelectorAll(".heading")[0].innerHTML = "🚩Player 1 Wins!";
    return num1;
  }
  else if (num1==num2) {
    document.querySelectorAll(".heading")[0].innerHTML = "🚩Draw🚩";
  }
  else{
    document.querySelectorAll(".heading")[0].innerHTML = "Player 2 Wins!🚩";
    return num2;
  }
}

function refreshMe() {
  let randm1 = Math.floor(Math.random() * 6 + 1);
  switch (randm1) {
    case 1:
      document.querySelectorAll("img")[0].src = "images/dice1.png";
      break;
    case 2:
      document.querySelectorAll("img")[0].src = "images/dice2.png";
      break;
    case 3:
      document.querySelectorAll("img")[0].src = "images/dice3.png";
      break;
    case 4:
      document.querySelectorAll("img")[0].src = "images/dice4.png";
      break;
    case 5:
      document.querySelectorAll("img")[0].src = "images/dice5.png";
      break;
    case 6:
      document.querySelectorAll("img")[0].src = "images/dice6.png";
      break;
    default:
      break;
  }
  let randm2 = Math.floor(Math.random() * 6 + 1);
  switch (randm2) {
    case 1:
      document.querySelectorAll("img")[1].src = "images/dice1.png";
      break;
    case 2:
      document.querySelectorAll("img")[1].src = "images/dice2.png";
      break;
    case 3:
      document.querySelectorAll("img")[1].src = "images/dice3.png";
      break;
    case 4:
      document.querySelectorAll("img")[1].src = "images/dice4.png";
      break;
    case 5:
      document.querySelectorAll("img")[1].src = "images/dice5.png";
      break;
    case 6:
      document.querySelectorAll("img")[1].src = "images/dice6.png";
      break;
    default:
      break;
  }
  winner(randm1, randm2);
}
