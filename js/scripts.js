responsiveNav = function () {
    var x = document.getElementById("respNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
displayPage = function () {
    document.getElementById("loader").style.display = "none";// removes the laoder.gif from the screen
    document.getElementById("respNav").style.display = "block";//reverts the display block and reveals divs
    document.getElementById("divs").style.display = "block";

}

loaderTimeOut = function () {
    var timeOut;
    timeOut = setTimeout(displayPage, 1500);//calls showPage functions after 1.5 seconds
}


emailValidation = function (email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        alert("Valid email address!");
        document.frmEmail.email.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.frmEmail.email.focus();
        return false;
    }
}










