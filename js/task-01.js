"use strict";

const categoriesNumber = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesNumber}`);


const categoryTitle = document.querySelectorAll("h2");
categoryTitle.forEach((item) => {
    console.log("Category:", item.textContent);
    console.log("Elements:", item.nextElementSibling.children.length);
});

