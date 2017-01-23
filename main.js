var clientName;
var clientEmail;
var clientPassword;
var clients = {};
var users = [];

function signup(){
    var clientName = document.getElementById('client-Name');
    var clientLastName = document.getElementById('client-LastName');
    var clientEmail = document.getElementById('client-Email');
    var clientPassword = document.getElementById('client-Password');
    clients = {
        firstName: clientName.value,
        lastName: clientLastName.value,
        email: clientEmail.value,
        pass: clientPassword.value 
    };

    
    if(clients.firstName=="" || clients.lastName=="" || clients.email=="" || clients.pass == ""){
        alert("you left field empty");
    }
    else{
        users.push(clients);
        localStorage.setItem("clients", JSON.stringify(clients));

        clientName.value="";
        clientLastName.value="";
        clientEmail.value="";
        clientPassword.value="";
        }
    //...............
    // clientName = document.getElementById('client-Name');
    // clientEmail = document.getElementById('client-Email');
    // clientPassword = document.getElementById('client-Password');
    
    // localStorage.setItem('clientEmail',  JSON.stringify(clientEmail.value) );
    // localStorage.setItem('clientPassword', JSON.stringify(clientPassword.value));
}

function login(){
    // var storedEmail = JSON.parse(localStorage.getItem('clientEmail'));
    // var storedPassword = JSON.parse(localStorage.getItem('clientPassword'));

    //user Login Data
    var userEmail = document.getElementById('user-Email');
    var userPassword = document.getElementById('user-Password');

    users.forEach( function (clients){
        if(clients.email == userEmail.value && clients.pass == userPassword.value){
            window.location.href = "dashboard.html";
            return;
        }
        else{
            alert("no no no");
            return;
        }
    });

    // if(userEmail.value == storedEmail && userPassword.value == storedPassword){
    //     alert("Registered and login successfully");
    // }
    // else{
    //     alert("id or password dosent exist");
    // }
}

function showSignin(){
    log_box = document.getElementById('login-box');
    sign_box = document.getElementById('signin-box');

     log_box.style.display = "none";
     sign_box.style.display = "block";
}


function showLogin(){
    log_box = document.getElementById('login-box');
    sign_box = document.getElementById('signin-box');

     sign_box.style.display = "none";
     log_box.style.display = "block";
}