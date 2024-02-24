// Add user info to localStorgae
// Adding multiple users into
var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
var ulList=document.createElement('ul');
// var list=document.createElement('ul');
userForm.addEventListener('submit', userInfo);

//Make Array to store or Load array info
   let list=JSON.parse(localStorage.getItem("userList")) || [];

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
    let btn=document.createElement('button');

    btn.className='delete';
    btn.addEventListener('click', deleteUser);
    btn.appendChild(document.createTextNode('Delete'));
    li.appendChild(document.createTextNode(userName.value+' - '+userMail.value));
    li.appendChild(btn);
    ulList.appendChild(li);
    userForm.appendChild(ulList);
}

// Deleting user from list and localStorage
function deleteUser(e) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      // Getting the user name from the form list
      var userItem = li.textContent.split(' - ')[0].trim(); 
      //Finding the user index in array
      var userIndex = -1;
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
  }
