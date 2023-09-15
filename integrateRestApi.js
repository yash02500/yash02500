// JAVASCRIPT FILE


let userForm=document.getElementById('my-form');
let SellingPrice=document.getElementById('sellingPrice');
let ProductName=document.getElementById('productName');
let ulList=document.getElementById('ul');
let tot=document.createElement('h2');

let totalWorth =0;

userForm.addEventListener('submit', userInfo);

  function userInfo(e){
    e.preventDefault();
    if(SellingPrice.value==='' || ProductName.value===''){
        alert('Please enter values');
    }
    else{

        let newProduct={
            price:parseInt(SellingPrice.value),
            name:ProductName.value
        };
        
      axios.post("https://crudcrud.com/api/fd23ca9f605b4d55a446b522df5df020/appointmentData",newProduct)
            .then((res)=>{
                displayUser(res.data);
                totalWorth += parseInt(res.data.price);
                TotalWorthDisplay();
              }
            ).catch((err)=>{
              console.log(err);
            })
    }
     
   userForm.reset();
}

//DOMReload
window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/fd23ca9f605b4d55a446b522df5df020/appointmentData")
    .then((res) => {
      console.log(res);
      res.data.forEach((userdata) => {
         displayUser(userdata);
         totalWorth += userdata.price;
        TotalWorthDisplay();
      });
    }).catch((err) => {
      console.log(err);
    })
});



function displayUser(userData) {
  let li = document.createElement('li');
  
  let text = document.createTextNode(`${userData.price} - ${userData.name}`);
  li.appendChild(text);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delBtn float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  deleteBtn.addEventListener('click', ()=>deleteUser(userData._id));
  li.appendChild(deleteBtn);
  
  ulList.appendChild(li);
  userForm.append(ulList);
  userForm.append(tot);
}


//Delete function
function deleteUser(userId) {
  // Remove the user from the displayed list 
  let userToDelete = document.querySelector(`li[data-id="${userId}"]`);
  if (userToDelete) {
    ulList.removeChild(userToDelete);
  }


//get product price to be deleted
axios.get(`https://crudcrud.com/api/fd23ca9f605b4d55a446b522df5df020/appointmentData/${userId}`)
.then((res) => {
  let deletedProduct = res.data;

  // Update the total worth by subtracting the deleted product's price
  totalWorth -= deletedProduct.price;
  TotalWorthDisplay();
})
.catch((err) => {
  console.log(err);
});


  //remove the user from the API
  axios.delete(`https://crudcrud.com/api/fd23ca9f605b4d55a446b522df5df020/appointmentData/${userId}`)
    .then(() => {
      console.log(`User with ID ${userId} deleted from the server.`);
    }).catch((err) => {
      console.log(err);
    });
}


//Total value function
function TotalWorthDisplay() {
  tot.innerHTML = `Total Value Worth Of Products: Rs ${parseInt(totalWorth)}`;
}



//HTML FILE


/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Admin Panel</title>
    <link rel="stylesheet" href="demo.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/axios.min.js"></script>
  </head>
  <body>
    <header>
      <h1>Admin Panel</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <ul id="ul"></ul>
        <h1>Add Products</h1>
        <div class="msg"></div>
        <div>
          <label for="sellingPrice">Selling Price:</label>
          <input type="text" id="sellingPrice">
        </div>
        <div>
          <label for="email">Product Name:</label>
          <input type="text" id="productName">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>
    </section>

    <script src="demo.js"></script>
  </body>
</html> */



//CSS FILE


/*

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
  }
  
  ul li {
    padding: 5px;
    background: #f4f4f4;
    margin: 5px 0;
  }
  
  header {
    background: #f4f4f4;
    padding: 1rem;
    text-align: center;
  }
  
  .container {
    margin: auto;
    width: 500px;
    overflow: auto;
    padding: 3rem 2rem;
  }
  
  #my-form {
    padding: 2rem;
    background: #f4f4f4;
  }
  
  #my-form label {
    display: block;
  }
  
  #my-form input[type='text'] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .btn {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: 0;
    background: #333;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .btn:hover {
    background: #444;
  }
  
  .bg-dark {
    background: #333;
    color: #fff;
  }
  
  .error {
    background: orangered;
    color: #fff;
    padding: 5px;
    margin: 5px;
  }
  
  .delBtn{
    color: rgb(255, 255, 255);
    display: block;
    padding: 5px 10px;
    border: 0;
    background: #e22323;
    color: #fff;
    border-radius: 3px;
    margin-left: auto;
  }
  
  .editBtn{
    color: rgb(255, 255, 255);
    display: block;
    padding: 5px 10px;
    border: 0;
    background: #a39797;
    color: #fff;
    border-radius: 3px;
    margin-left: auto;
  } 
*/  
  
  
