// EXAMINE THE DOCUMENT OBJECT
/*
console.dir(document);
console.log(document.title);
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].textContent = "Hello");
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
*/

//Get Element By Id :::::::
//console.log(document.getElementById('header-title'));
let hTitle = document.getElementById('header-title');
let mTitle = document.getElementById('main-header');
//console.log(hTitle);
//hTitle.textContent = 'Hello';
//hTitle.innerText = 'Goodbye';
//console.log(hTitle.innerText);
//hTitle.innerHTML = '<h3>Hello</h3>';
mTitle.style.borderBottom = 'solid 3px #000';

//Get Element By CLASSNAME ::::::
//console.log(document.getElementsByClassName('title'));
let addItemTitle = document.getElementsByClassName('title');
addItemTitle[0].style.fontWeight = 'bold'; //Making Text Bold
addItemTitle[0].style.color = 'green'; // Change Font Color to Green

//GETELEMENTBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
/*
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
*/
items[2].style.backgroundColor = 'green';

// items.style.fontWeight = 'bold'; //Do not work because it is an Array Form.

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}