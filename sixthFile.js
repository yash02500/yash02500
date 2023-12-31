//parentNode
var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello 1";

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 4";

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
//create a div
var newDiv=document.createElement('div');
//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText=document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

//Add new textnode before h1 header
console.log(newDiv);
newDiv.style.fontSize='32px';
container.insertBefore(newDiv, h1);

//Add new text node before item1
var newItemList = document.getElementById('items');
var newLi = document.createElement('li');

// Append the text to the new li element
newLi.appendChild(newDivText);

// Select the first li element inside the ul
var firstLi = newItemList.firstElementChild;

// Insert the new li before the first li element
newItemList.insertBefore(newLi, firstLi);