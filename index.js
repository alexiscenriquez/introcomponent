

function validate() {
    let fName = document.forms["claim"]["fName"].value;
    let lName = document.forms["claim"]["lName"].value;
    let email = document.forms["claim"]["email"].value;
    let pwd = document.forms["claim"]["pwd"].value;

    if (fName == "") {
        document.getElementById("error1").style.opacity = "1"
    document.getElementById("fName").style.border="1pt solid red"
    }
    if (lName == "") {
        document.getElementById("error2").style.opacity = "1"
        document.getElementById("lName").style.border="1pt solid red"
    }
    if (email == "") {
        document.getElementById("error3").style.opacity = "1"
        document.getElementById("email").style.border="1pt solid red"
    }
    if (pwd == "") {
        document.getElementById("error4").style.opacity = "1"
        document.getElementById("pwd").style.border="1pt solid red"
     
    }
}