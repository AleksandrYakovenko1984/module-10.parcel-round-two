import data from '../src/menu.json';
import refs from '../src/refs.js';
const { list, btn, body } = refs

// console.log(data);
import cardMenu from '../src/templates/card-menu.hbs'
// console.log(cardMenu(data[0]));

function createCardMenu(data) {
    return data.map(cardMenu).join('')
}

// console.log(createCardMenu(data));

const menuCardList = createCardMenu(data)

// console.log(menuCardList);

list.insertAdjacentHTML('beforeend', menuCardList)

// работа с темой

console.log(localStorage);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const {LIGHT, DARK} = Theme
console.log(btn.checked);

let theme = localStorage.getItem('theme')
console.log(theme);

btn.addEventListener('change', (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
        document.querySelector('body').classList.add(DARK)
        localStorage.setItem('theme', DARK)
    } else {
          document.querySelector('body').classList.remove(DARK)
        localStorage.removeItem('theme', DARK)
    }
})

// document.querySelector(body).classList.toggle(DARK)
// document.querySelector(body).classList.toggle(LIGHT)
// let themes = e.target.checked ? DARK : LIGHT

// localStorage.setItem('theme', themes)


// if (!theme) {
//     theme === LIGHT
//     localStorage.setItem('theme', theme)
    
    
// }
// document.querySelector(body).classList.add(theme)
// btn.checked = theme === LIGHT ? false : true

if (theme) {
    document.querySelector('body').classList.add(DARK)

    btn.checked === true
} else {
    document.querySelector('body').classList.remove(DARK)
    btn.checked === false
}







