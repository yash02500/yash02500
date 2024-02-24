var items=document.getElementsByClassName('list-group-item');
for(let i=0; i<items.length; i++){
items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='green';

// added new li element
var newItem=document.getElementsByClassName('newitem');
newItem[0].style.color='red';
newItem[0].style.fontWeight='bold';

//editing new li element with getelementbytagname
var newone=document.getElementsByTagName('li');
newone[4].style.color='red';
newone[4].style.fontWeight='bold';