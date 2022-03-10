const div = document.createElement("div");
div.className = "container";

const newDice = document.createElement("button");
newDice.innerHTML = "New Dice";
newDice.className = "btn1";

const rerollDice = document.createElement("button");
rerollDice.innerHTML = "Re-Roll Dice";
rerollDice.className = "btn2";
rerollDice.id = "btn2";

const addDice = document.createElement("button");
addDice.innerHTML = "Sum of Dice";
addDice.className = "btn3";

const advancedBtn = document.createElement("button");
advancedBtn.innerHTML = "Advanced!";
advancedBtn.className = "btn4";

const diceContainer = document.createElement("div");
diceContainer.className = "diceContainer";

div.appendChild(newDice);
div.appendChild(rerollDice);
div.appendChild(addDice);
div.appendChild(advancedBtn);
document.body.appendChild(div);
document.body.appendChild(diceContainer);

let counter = 1;
let diceArray = [];
let diceId = 0;
function randomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1) + 1);
}

// function diceRoll() {
//   let min = Math.ceil(1);
//   let max = Math.floor(7);
//   let roll = Math.floor(Math.random() * (max - min + 1)) + min;
// }

class Dice {
  constructor() {
    this.die = document.createElement("div");
    this.value = randomNum();
    this.id = `${diceId++}`;
    this.diceInfo();
    this.die.append(this.value);
    diceArray.push(this);

    this.die.addEventListener("dblclick", () => {
      this.die.remove();
      const diceIndex = diceArray.indexOf(this);
      diceArray.splice(diceIndex, 1);
    });
    this.die.addEventListener("click", () => this.roll());
    rerollDice.addEventListener("click", () => this.roll());
  
  }

  roll() {
    this.value = randomNum();
    this.die.id = this.value;
    this.die.innerHTML = this.value;

    // if ((acutalDie = true)) {
    //   if (this.value === 1) {
    //     this.die.innerHTML = "\u2680";
    //   } else if (this.value === 2) {
    //     this.die.innerHTML = "\u2681";
    //   } else if (this.value === 3) {
    //     this.die.innerHTML = "\u2682";
    //   } else if (this.value === 4) {
    //     this.die.innerHTML = "\u2683";
    //   } else if (this.value === 5) {
    //     this.die.innerHTML = "\u2684";
    //   } else if (this.value === 6) {
    //     this.die.innerHTML = "\u2685";
    //   }
    // }
  }

  diceInfo() {
    this.die.className = "dice";
    this.die.id = "dice-info";
    diceContainer.append(this.die);
  }
}

newDice.addEventListener("click", function () {
  new Dice();
  counter++;
});

addDice.addEventListener("click", function (sum) {
  let counter = 0;
  diceArray.forEach((die) => (counter += die.value));
  alert(counter);
});

// this btn isn't working yet
advancedBtn.addEventListener("click", function () {
  acutalDie = true;
  diceArray.forEach((die) => {
    if (this.value === 1) {
      this.die.innerHTML = "\u2680";
    } else if (this.value === 2) {
      this.die.innerHTML = "\u2681";
    } else if (this.value === 3) {
      this.die.innerHTML = "\u2682";
    } else if (this.value === 4) {
      this.die.innerHTML = "\u2683";
    } else if (this.value === 5) {
      this.die.innerHTML = "\u2684";
    } else if (this.value === 6) {
      this.die.innerHTML = "\u2685";
    }
  });
});
