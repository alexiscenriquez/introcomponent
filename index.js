

function validate() {
    let fName = document.forms["claim"]["fName"].value;
    let lName = document.forms["claim"]["lName"].value;
    let email = document.forms["claim"]["email"].value;
    let pwd = document.forms["claim"]["pwd"].value;

    if (fName == "") {
        document.getElementById("error1").style.display = "block"
    document.getElementById("fName").style.border="1pt solid red"
    }
    if (lName == "") {
        document.getElementById("error2").style.display = "block"
        document.getElementById("lName").style.border="1pt solid red"
    }
    if (email == "") {
        document.getElementById("error3").style.display = "block"
        document.getElementById("email").style.border="1pt solid red"
    }
    if (pwd == "") {
        document.getElementById("error4").style.display = "block"
        document.getElementById("pwd").style.border="1pt solid red"
     
    }
}