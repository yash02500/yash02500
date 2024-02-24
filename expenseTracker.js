//HTML CODE

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
  <form id="expForm" class="p-4 bg-light rounded">
    <h2 class="mb-4">Expense Tracker</h2>

    <div class="form-group">
      <label for="amt">Choose amount:</label>
      <input type="number" class="form-control" id="amt">
    </div>
   
    <div class="form-group">
      <label for="dec">Choose description:</label>
      <input type="text" class="form-control" id="dec">
    </div>

    <div class="form-group">
      <label for="choose">Choose category:</label>
      <select class="form-control" id="choose">
        <option value="Movie" class="categ">Movie</option>
        <option value="Electricity" class="categ">Electricity</option>
        <option value="Fuel" class="categ">Fuel</option>
        <option value="Food" class="categ">Food</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Add Expense</button>
  </form>

  <!-- Display expense list -->
  <ul id="expList" class="list-group mt-4">
    <!-- List items will be appended here -->
  </ul>
</div>

<script src="demo.js"></script>
</body>
</html> */

//******************

//JAVASCRIPT CODE

var userForm=document.getElementById('expForm');
var expAmount=document.getElementById('amt');
var expDescription=document.getElementById('dec');
var expCategory=document.getElementById('choose');
var ulList=document.createElement('ul');
userForm.addEventListener('submit', expInfo);

//Make Array to store or Load array info
   let list=JSON.parse(localStorage.getItem("expList")) || [];

  function expInfo(e){
    e.preventDefault();
    const selectedCategory = expCategory.options[expCategory.selectedIndex].text;
    if(expAmount.value==='' || expDescription.value==='' || expCategory.value===''){
        alert('Please enter values');
    }
    else{

        getExp(selectedCategory);

        let newExpense={
            amount:expAmount.value,
            description:expDescription.value,
            expcategory:selectedCategory
        };
        
        list.push(newExpense);
        localStorage.setItem("expList", JSON.stringify(list));
        
    }
     
   userForm.reset();
}


//Display expense list on page
function getExp(selectedCategory){
    // let list=document.createElement('ul');
    let li=document.createElement('li');
    let delelteBtn=document.createElement('button');
    let editBtn=document.createElement('button');

    li.textContent=`${expAmount.value} - ${expDescription.value} - ${selectedCategory}`;

    // Appending delete button
    delelteBtn.className='delBtn float-right btn-danger delete';
    delelteBtn.appendChild(document.createTextNode('Delete'));
    delelteBtn.addEventListener('click', deleteExp);
    // li.appendChild(document.createTextNode(expAmount.value+' - '+expDescription.value+' - '+selectedCategory));
    li.appendChild(delelteBtn);

    // Appending edit button
    editBtn.className='editBtn float-right btn-warning edit';
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.addEventListener('click', editUser);
    li.appendChild(editBtn);
    ulList.appendChild(li);
    userForm.appendChild(ulList);
}

// Deleting user from list and localStorage
function deleteExp(e) {
      let li = e.target.parentElement;
      // Getting the expense description from the form list
      let userExp = li.textContent.split(' - ')[1].trim(); 
      //Finding the user index in array
      let expIndex = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].description === userExp) {
          expIndex = i;
          break;
        }
      }

      if (expIndex !== -1) {
        // Remove the user from the array
        list.splice(expIndex, 1); 
        // Updating local storage values
        localStorage.setItem('expList', JSON.stringify(list)); 
        ulList.removeChild(li); 
      }
  }
 
// Edit fucntion
function editUser(e) {
  if (e.target.classList.contains('edit')) {
    // Delete the user from the list and localStorage
    deleteExp(e);

    let userExp = e.target.parentElement.textContent;
    let [amount, description, expcategory] = userExp.split(' - ');

    // Set the values of the input fields to the user's data
    expAmount.value = amount.trim();
    expDescription.value = description.trim();
    expCategory.value = expcategory.trim();
  }
}

