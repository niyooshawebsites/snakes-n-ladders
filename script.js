const diceImg = document.querySelector(`.dice-img`);

//gennerte random number on the dice
document.addEventListener(`keydown`, function (e) {
  const randNo = Math.trunc(Math.random() * 6) + 1;
  if (e.key == `Enter`) {
    diceImg.src = `dice-${randNo}.png`;
  }
});
