//  select DOM - ELements
const section = document.querySelector('section');
const button = document.querySelector('#colBtn');
const inputNum = document.querySelector('#number');

function colorGenerator(e) {
  // ********************************************* 
  //  1.
  //  Create a function to generate a random color HEX code
  // ********************************************* 

  function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

    //  ODER (für mich): 
    // let randomColor = Math.floor(Math.random()*16777215).toString(16); 
  }
  randomColor();

  // ********************************************* 
  //  2.
  //  Create a function to add a new color item to the list, passing the color code as argument
  // ****   &&   ****
  //  4.
  //  Create a function to handle the submit of the form for adding more colors, which generates the needed amount of random hex colors and adds them to the list.
  // *********************************************

  function addColorAndAmountToList() {
    //  select amount, which is the value of the input
    const amount = inputNum.value;

    for (let i = 0; i < amount; i++) {
      //  create a color, INSIDE this loop!!!
      let hex = randomColor();
      //  create divs with background color
      section.insertAdjacentHTML('afterbegin', `
      <div 
        id="newOne"
        style="background-color: ${hex}">
        <p>${hex}</p>
        <span>x</span>
      </div>
      `);
    }
  }
  addColorAndAmountToList();

  // ********************************************* 
  //  3.
  //  Create a function to handle the removing of an item.
  // *********************************************
  
  function removeItems(e) {
    //  check which target to choose
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.closest('#newOne'));
    //  select target = span und remove only this one
    if (e.target.tagName === 'SPAN') {
      e.target.closest('#newOne').remove()
    }
  }
  section.addEventListener('click', removeItems)
}

// ********************************************* 
//  5.
//  Register the events (click delete and click submit) and attach the functions above.
// *********************************************

button.addEventListener('click', colorGenerator);


// ********************************************* 
//  6.
//  Create a function init() that is called on load and generates 3 color elements
// ********************************************* 
function init(e) {
  colorGenerator()
}
document.addEventListener('DOMContentLoaded', init)


//  READY **************************************