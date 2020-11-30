randomNumber1 = Math.floor(Math.random()*7);
randomNumber2 = Math.floor(Math.random()*7);
if (randomNumber1 === 0 || randomNumber2 === 0) {
  randomNumber1 += 1;
  randomNumber2 += 1;
}
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player one wins &#x1F6A9"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player two wins &#x1F6A9"
}
else {
  document.querySelector("h1").innerHTML = "Draw &#x1F3C1"
}
