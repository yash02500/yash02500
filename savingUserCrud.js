// Add user info to localStorgae
// Adding multiple users into

var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
var ulList=document.createElement('ul');
let getData=document.getElementById('getdata');
getData.addEventListener('click',get_data)

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
        
      axios.post("https://crudcrud.com/api/3ce6e2ecd1944477a90baadf0db6dc6c/appointmentData",newUser)
            .then((res)=>{
                getUser(res.data);
              }
            ).catch((err)=>{
              console.log(err);
            })

        // list.push(newUser);
        // localStorage.setItem("userList", JSON.stringify(list));
        
    }
     
   userForm.reset();
}

//Get data back on screen using axios
  function get_data(){
   // let getus=document.createElement('li');
     axios.get("https://crudcrud.com/api/3ce6e2ecd1944477a90baadf0db6dc6c/appointmentData")
      .then((res)=>{
        showOutput(res);
      }
    ).catch((err)=>{
     console.log(err);  
   })

}


//show data fucntion
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>`
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
