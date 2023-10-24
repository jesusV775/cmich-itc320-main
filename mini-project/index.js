//index page
const $ = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    
    //allow the user to enter a password
    $("#unlock").addEventListener("click", () => {
        const pass = parseInt(prompt("Please enter the password"));
        if (pass != 1234){
            alert("Incorrect password");
        }
        //if succeed, move to the list
        else{
            $("#unlock_list").submit();
        }
    });
});