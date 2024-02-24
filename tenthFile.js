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

        let myObj={
            name:userName.value,
            email:userMail.value
        };
        
        let objSerialized=JSON.stringify(myObj);
        localStorage.setItem("myObj", objSerialized);
        let objDeserialized=JSON.parse(localStorage.getItem("myObj"));
    }

    userName.value = '';
    userMail.value = '';
}