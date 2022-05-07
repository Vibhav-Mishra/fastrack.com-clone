document.querySelector("form").addEventListener("submit", signin);

  var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

  function signin(event) {
    event.preventDefault();
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#user").value;

    for (var i = 0; i < regdUsers.length; i++) {
      console.log(regdUsers[i].userName, regdUsers[i].passwd);
      if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {
        alert("Loged In")
        window.location.href = "index.html";
        break;
      }
      else  if (regdUsers[i].userName != null && regdUsers[i].passwd != null){
        alert("Incorrect");
        
        window.location.href = "login.html";
        break;
      }
      else{
        alert("Please try after some time")
      }
    }
  }