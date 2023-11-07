const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

function addListItems(){
  let newListItem = [];
  let item;
  for(let i = 0; i < ingredients.length; i++){
    item = document.createElement('li');
    item.textContent = ingredients[i];
    item.classList.add("item");
    newListItem.push(item); 
  }

  list.append(...newListItem);
}

addListItems();