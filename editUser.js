// Add user info to localStorgae
// Adding multiple users into
var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
var ulList=document.createElement('ul');
userForm.addEventListener('submit', userInfo);

//Make Array to store or Load array info
   var list=JSON.parse(localStorage.getItem("userList")) || [];

  function userInfo(e){
    e.preventDefault();
    if(userName.value==='' || userMail.value===''){
        alert('Please enter values');
    }
    else{

        getUser();

        let newUser={
            name:userName.value,
            email:userMail.value
        };
        
        list.push(newUser);
        localStorage.setItem("userList", JSON.stringify(list));
        
    }
     
   userForm.reset();
}


//Display new user list on page
function getUser(){
    // let list=document.createElement('ul');
    let li=document.createElement('li');
    let delelteBtn=document.createElement('button');
    let editBtn=document.createElement('button');

    // Appending delete button
    delelteBtn.className='delBtn float-right delete';
    delelteBtn.appendChild(document.createTextNode('Delete'));
    delelteBtn.addEventListener('click', deleteUser);
    li.appendChild(document.createTextNode(userName.value+' - '+userMail.value));
    li.appendChild(delelteBtn);

    // Appending edit button
    editBtn.className='editBtn float-right edit';
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.addEventListener('click', editUser);
    li.appendChild(editBtn);
    ulList.appendChild(li);
    userForm.appendChild(ulList);
}

// Deleting user from list and localStorage
function deleteUser(e) {
      let li = e.target.parentElement;
      // Getting the user name from the form list
      let userItem = li.textContent.split(' - ')[0].trim(); 
      //Finding the user index in array
      let userIndex = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].name === userItem) {
          userIndex = i;
          break;
        }
      }

      if (userIndex !== -1) {
        // Remove the user from the array
        list.splice(userIndex, 1); 
        // Updating local storage values
        localStorage.setItem('userList', JSON.stringify(list)); 
        ulList.removeChild(li); 
      }
  }
 
// Edit fucntion
function editUser(e) {
  if (e.target.classList.contains('edit')) {
    // Delete the user from the list and localStorage
    deleteUser(e);

    let userItem = e.target.parentElement.textContent;
    let [name, email] = userItem.split(' - ');

    // Set the values of the input fields to the user's data
    userName.value = name.trim();
    userMail.value = email.trim();
  }
}




/// HTML CODE

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="demo.css">
  </head>
  <body>
    <header>
      <h1>Basic Form</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>
    </section>
    

    <script src="demo.js"></script>
  </body>
</html> */
