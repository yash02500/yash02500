var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
var ulList=document.getElementById('ul');
// let getData=document.getElementById('getdata');
// getData.addEventListener('click',get_data)

userForm.addEventListener('submit', userInfo);

  function userInfo(e){
    e.preventDefault();
    if(userName.value==='' || userMail.value===''){
        alert('Please enter values');
    }
    else{

        let newUser={
            name:userName.value,
            email:userMail.value
        };
        
      axios.post("https://crudcrud.com/api/e494aee646e8475b899ca3e48206e6e0/appointmentData",newUser)
            .then((res)=>{
                displayUser(res.data);
              }
            ).catch((err)=>{
              console.log(err);
            })
    }
     
   userForm.reset();
}

//DOMReload
window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/e494aee646e8475b899ca3e48206e6e0/appointmentData")
    .then((res) => {
      console.log(res);
      res.data.forEach((userdata) => {
        displayUser(userdata);
      });
    }).catch((err) => {
      console.log(err);
    })
});


//event listener to the Save button in the edit form
  document.getElementById('save-edit').addEventListener('click', (e) => {
    e.preventDefault();
    // Get the edited user data from the edit form
    const editedUserId = document.getElementById('edit-user-id').value;
    const editedUserName = document.getElementById('edit-name').value;
    const editedUserEmail = document.getElementById('edit-email').value;

    // Update the displayed user's information
    let userToEdit = document.querySelector(`li[data-id="${editedUserId}"]`);
    if (userToEdit) {
      userToEdit.textContent = `${editedUserName} - ${editedUserEmail}`;
    }

    // Hide the edit form
    document.getElementById('edit-form').style.display = 'none';

    // Send a PUT request to update the user's information in the API
    axios.put(`https://crudcrud.com/api/e494aee646e8475b899ca3e48206e6e0/appointmentData/${editedUserId}`, {
      name: editedUserName,
      email: editedUserEmail
    })
      .then(() => {
        console.log(`User with ID ${editedUserId} updated.`);
      })
      .catch((err) => {
        console.log(err);
      });
  });


//

function displayUser(userData) {
  let li = document.createElement('li');
  
  let text = document.createTextNode(`${userData.name} - ${userData.email}`);
  li.appendChild(text);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delBtn float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  deleteBtn.addEventListener('click', ()=>deleteUser(userData._id));

  let editBtn = document.createElement('button');
  editBtn.className = 'editBtn float-right edit';
  editBtn.appendChild(document.createTextNode('EDIT'));
  editBtn.addEventListener('click', () => {
    document.getElementById('edit-user-id').value = userData._id;
    document.getElementById('edit-name').value = userData.name;
    document.getElementById('edit-email').value = userData.email;
    document.getElementById('edit-form').style.display ='block';
  });
  

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  ulList.appendChild(li);
  userForm.append(ulList);
}


//Delete function
function deleteUser(userId) {
  // Remove the user from the displayed list 
  let userToDelete = document.querySelector(`li[data-id="${userId}"]`);
  if (userToDelete) {
    ulList.removeChild(userToDelete);
  }

  //remove the user from the API
  axios.delete(`https://crudcrud.com/api/e494aee646e8475b899ca3e48206e6e0/appointmentData/${userId}`)
    .then(() => {
      console.log(`User with ID ${userId} deleted from the server.`);
    }).catch((err) => {
      console.log(err);
    });
}


