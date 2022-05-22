const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let index = " ";


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(text)) {
        index = array.indexOf(text);
        console.log(index);
      }
    }
  }
  findArrayIndex(animals, "Salamandra");