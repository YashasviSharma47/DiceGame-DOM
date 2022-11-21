var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player1 bags";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player2 bags";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW";
}
