/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
	const rand = Math.random();
	const range = rand * max;
	const result = Math.ceil(range);

	return result;
};

const sortByNumber = function (arr) {
	const byNumber = function (item1, item2) {
		return item1 - item2;
	};

	return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * EVENT LISTENERS *
 *******************/
const d6Roll = document.getElementById("d6-roll");
d6Roll.addEventListener("click", function () {
  rolledD6 = getRandomNumber(6)
	sixes.push(rolledD6);
	console.log("d6:", sortByNumber(sixes));
  console.log("MEAN:", mean(sixes));
  document.getElementById("d6-rolls-mean").innerText = mean(sixes)
  console.log("MEDIAN:", median(sixes))
  document.getElementById("d6-rolls-median").innerText = median(sixes)
  d6Roll.src = `images/d6/${rolledD6}.png`
});

/******************
 * RESET FUNCTION *
 ******************/
const resetAllRolls = document.getElementById("reset-button");
resetAllRolls.addEventListener("click", function () {
	console.log("reset button clicked");
	sixes.splice(0, sixes.length);
  console.log("d6:", sixes);
  document.getElementById("d6-rolls-mean").innerText = ""
  document.getElementById("d6-rolls-median").innerText = median(sixes)
  d6Roll.src = `images/start/d6.png`
	// doubleSixes.splice(0, doubleSixes.length);
  // console.log("2d6:", doubleSixes);
	// twelves.splice(0, twelves.length);
  // console.log("d12:", twelves);
	// twenties.splice(0, twenties.length);
	// console.log("d20:", twenties);
	//reset all arrays to empty
	//reset images to original
});

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

/****************
 * MATH SECTION *
 ****************/
function mean(arr){
  let sum = 0
  for (num of arr){
    sum += num
  }
  return sum / arr.length
}

function median(arr){
  const sortedArr = sortByNumber(arr)
  let medianNum = Math.round((arr.length / 2)-1)
  return sortedArr[medianNum]
}