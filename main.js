const login = document.querySelector("#login");

function myFunction() {
    alert(document.getElementById('userName').value);
}
  
login.addEventListener('click', myFunction);
