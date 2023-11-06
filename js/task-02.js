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
  let newListItem;
  for(let i = 0; i < ingredients.length; i++){
      newListItem = document.createElement('li');
      newListItem.textContent = ingredients[i];
      newListItem.classList.add("item");
      list.append(newListItem);
  }
}

addListItems();