//Make the 2nd item have green background color
var second=document.querySelector('.list-group-item:nth-child(2)');
second.style.backgroundColor='green';

//Make the 3rd item invisible 
var third=document.querySelector('.list-group-item:nth-child(3)');
third.style.visibility='hidden';

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var secondColor=document.querySelectorAll('.list-group-item');
secondColor[1].style.color='green';

//Choose all the odd elements and make their background green using QuerySelectorALL
var allItems=document.querySelectorAll('.list-group-item:nth-child(odd)');
for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.backgroundColor='green';
}