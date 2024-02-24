var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

//Get input value
var newItem=document.getElementById('item').value;
//create new li element
var li=document.createElement('li');
//Add class
li.className='list-group-item';
//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//Delete button element
var deleteBtn=document.createElement('button');

//Add class to del btn
deleteBtn.className='btn btn-danger btn-sm float-right delete';

//Append text node
deleteBtn.appendChild(document.createTextNode('X'));

//Edit button element
var edit=document.createElement('button');

//Add class to edit btn
edit.className='btn btn-secondary btn-sm float-right edit';

//Append text node
edit.appendChild(document.createTextNode('EDIT'));

//Append edit btn to li
li.appendChild(edit);

//Append button to li
li.appendChild(deleteBtn);

//Append li to list
itemList.appendChild(li);
}

//Remove item func
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure?')) {
            var li=e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}

//Filter items
function filterItems(e){
 //convert to lowercase
 var text=e.target.value.toLowerCase();
 // Get list
 var items=itemList.getElementsByTagName('li');
 //convert to array
 Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text)!=-1) {
       item.style.display='block';   
    }
    else{
        item.style.display='none';
    }
});
}