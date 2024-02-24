//HTML

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="demo.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/axios.min.js"></script>
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
        <input class="btn" type="button" id="getdata" value="Get Data">
      </form>
    </section>
    
    <!-- <div id="res"></div>
    </div> -->


    <script src="demo.js"></script>
  </body>
</html> */



//Javascript

var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
var ulList=document.createElement('ul');
// let getData=document.getElementById('getdata');
// getData.addEventListener('click',get_data)

userForm.addEventListener('submit', userInfo);

  function userInfo(e){
    e.preventDefault();
    if(userName.value==='' || userMail.value===''){
        alert('Please enter values');
    }
    else{

        // getUser();

        let newUser={
            name:userName.value,
            email:userMail.value
        };
        
      axios.post("https://crudcrud.com/api/8567b336171349f289710f0a07acea6c/appointmentData",newUser)
            .then((res)=>{
                displayUser(res.data);
              }
            ).catch((err)=>{
              console.log(err);
            })
    }
     
   userForm.reset();
}


window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/8567b336171349f289710f0a07acea6c/appointmentData")
    .then((res) => {
      console.log(res);
      res.data.forEach((userData) => {
        displayUser(userData);
      });
    }).catch((err) => {
      console.log(err);
    })
});



function displayUser(userData) {
  let li = document.createElement('li');
  
  let text = document.createTextNode(`${userData.name} - ${userData.email}`);
  li.appendChild(text);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delBtn float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));

  let editBtn = document.createElement('button');
  editBtn.className = 'editBtn float-right edit';
  editBtn.appendChild(document.createTextNode('EDIT'));
  

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  ulList.appendChild(li);
  userForm.append(ulList);
}
