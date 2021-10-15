import data from '../src/menu.json';
import refs from '../src/refs.js';
const { list } = refs

console.log(data);
import cardMenu from '../src/templates/card-menu.hbs'
// console.log(cardMenu(data[0]));

function createCardMenu(data) {
    return data.map(cardMenu).join('')
}

// console.log(createCardMenu(data));

const menuCardList = createCardMenu(data)

console.log(menuCardList);
    
list.insertAdjacentHTML('beforeend', menuCardList)