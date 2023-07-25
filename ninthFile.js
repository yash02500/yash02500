// Add user info to localStorage
var userForm=document.getElementById('my-form');
var userName=document.getElementById('name');
var userMail=document.getElementById('email');
userForm.addEventListener('submit', userInfo);

function userInfo(e){
    e.preventDefault();
    if(userName.value==='' || userMail.value===''){
        alert('Please enter values');
    }
    else{
        //console.log(UserName.value+' '+userMail.value);
        localStorage.setItem('name',userName.value);
        localStorage.setItem('mail', userMail.value);
    }

    userName.value = '';
    userMail.value = '';
}
