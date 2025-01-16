function clearNewslettertextfield (){
    document.getElementById("emailSignUpEmail").value = ""
}

function submitNewsletter() {
    var newsLetterForm = document.getElementById("newsLetterForm");
    var confirmationMessage = document.getElementById("newslettersignupconfirmation");
    newsLetterForm.style.visibility = "hidden";
    confirmationMessage.style.visibility = "visible"
}