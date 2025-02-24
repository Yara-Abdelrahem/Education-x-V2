function Login() {
    var  x = document.getElementById("UN").value ;
    var y = document.getElementById("PW").value ;
    if (x=="Fcis2024" &&  y=="Abc_1234") {
        alert("Welcome Admin. You Will Now Be Redirected to The Admin's Page");
        window.location.href = "#.html";               // # =link admin page //
    }
    else {
        alert("Login Succesful");
        window.location.href = "#.html";                  //#= link home page //
    }
}
function Logout() {
    alert("Logout Succesfully");
    window.location.href = "#.html";                      //link logout page   or  login page //
}