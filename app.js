const div = document.createElement("div");
div.className = "container";

const newDice = document.createElement("button");
newDice.textContent = "New Dice";
newDice.className = "btn1";

const rerollDice = document.createElement("button");
rerollDice.textContent = "Re-Roll Dice";
rerollDice.className = "btn2";
rerollDice.id = "btn2";

const addDice = document.createElement("button");
addDice.textContent = "Sum of Dice";
addDice.className = "btn3";

const advancedBtn = document.createElement("button");
advancedBtn.textContent = "Advanced!";
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
    this.diceInfo();
    // this.sumOfDice();
    // this.roll();
    this.die.append(this.value);
    diceArray.push(this);
    this.die.addEventListener("dblclick", () => {
      this.die.remove();
      const diceIndex = diceArray.indexOf(this);
      diceArray.splice(diceIndex, 1);
      // run array.splice to remove the Dice object using DiceIndex
    });
    // this.die.addEventListener("click", () => {
    //     this.roll();
    // });
  }
  diceInfo() {
    this.die.className = "dice";
    this.die.id = "dice-info";
    diceContainer.append(this.die);
  }

//   sumOfDice() {
//     let result = diceArray.reduce((acc, val) => {
//         return acc + val;
//     });
// }

roll() {
    this.value = diceRoll();
    this.die.id = this.value;
    this.die.innerHTML = " ";
    //   diceArray.forEach(function() {
    //     this.die.classList.add("shake")
    //   });
    //   setTimeout(function() {
    //       this.die.remove("shake");
    //   })
  }
}

newDice.addEventListener("click", function () {
  new Dice();
  counter++;
});

// addDice.addEventListener("click", function () {
//     alert(result);
// });

// rerollDice.addEventListener("click", () => this.roll());
// rerollDice.addEventListener("click", function() {
//     diceArray.forEach(randomNum());
//     diceArray.forEach = roll();
// foreach over dicearray and call roll method
// });

// addBtn.addEventListener("click", function(sum) {
//     let sum = diceArray.reduce(this.value)
//     alert(diceArray.reduce(sum));
// });

// addbtn.addEventListener("click", function sum(a, b) {
//   return a + b;
// });
// alert(diceArray.reduce(sum));
