// Add user info to localStorgae
// Adding multiple users into
var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
// var list=document.createElement('ul');
userForm.addEventListener('submit', userInfo);

//Make Array to store
   let userList=[
    
   ];

   // Load array info
   let list=JSON.parse(localStorage.getItem("newUserList"));

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
        
        userList.push(newUser);
        localStorage.setItem("newUserList", JSON.stringify(userList));
        
    }
     
   userForm.reset();
}

// Display user list on page
function getUser(){
    var list=document.createElement('ul');
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(userName.value+' - '+userMail.value));
    list.appendChild(li);
    userForm.appendChild(list);
}