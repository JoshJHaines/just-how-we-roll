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

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/
const d6Roll = document.getElementById('d6-roll');
d6Roll.addEventListener('click', function() {
  sixes.push(getRandomNumber(6));
  console.log(sortByNumber(sixes))
}
);

/******************
 * RESET FUNCTION *
 ******************/
 const resetAllRolls = document.getElementById('reset-button');
 resetAllRolls.addEventListener('click', function() {
   console.log("reset button clicked")
   sixes.splice(0, sixes.length)
   console.log(sixes)
   //reset all arrays to empty
   //reset images to original
 }
 );


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
