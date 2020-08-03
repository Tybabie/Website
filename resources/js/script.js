function validateName(){
    let say;
    const name = document.getElementById("name").value;
    let name_message = document.getElementById("name_message");
    if (name.length == "" || name.search(/[0-9]/) != -1 ) {
        document.getElementById("name").style.borderColor='red';
        say = 'Please enter a valid name'
        name_message.innerHTML = say;
        return false;
 
 }else{
     document.getElementById("name").style.border='none';
     name_message.innerHTML = '';
 }
}
function validatePhoneNumber(){
    const phone = document.getElementById("phone").value;
    let say;
    if (isNaN(phone) || phone.length > 0 &&  phone.length <= 10 ) {
        document.getElementById("phone").style.borderColor='red';
        say = "Please enter a valid phone number";
        phone_message.innerHTML = say;
        return false;
        
    }else{
        document.getElementById("phone").style.border='none';
        phone_message.innerHTML = '';
    }
}
function validateEmail(){
    let say;
    const email = document.getElementById("email").value;
    if (email.indexOf("@") == -1 || email.length < 11) {
        document.getElementById("email").style.borderColor='red';
        say = "Please enter a valid email address";
        email_message.innerHTML = say;
        return false;
       
    }else{
        document.getElementById("email").style.border='none';
        email_message.innerHTML = '';
    }
}
function validateText(){
    const message = document.getElementById("message").value;
    
 
    if (message.length == 0 || message.length > 350) {
        document.getElementById("message").style.borderColor='red';
        say = "Please enter less than 350 characters";
       text_message.innerHTML = say;
       return false;
      
    } else{
        document.getElementById("message").style.border='none';
        text_message.innerHTML = '';
    }
}
function formValidation() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name.length == "" || name.search(/[0-9]/) != -1 ) {
      alert('Please fill the required field')
        return false;
    }
    if ( isNaN(phone) || phone.length > 0 &&  phone.length <= 10 ) {
        alert('Please enter a valid phone number')
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 11) {
        alert('Please fill the required field')
        return false;
    }
    if (message.length == 0 || message.length > 350) {
        alert('Please fill the required field')
       return false;
    }
    alert("Thanks for reaching out to us 💙 ")
    return true;
}
    function show_hide(){
    let click = document.getElementById('drop-content')
    if (click.style.display === 'none') {
        click.style.display = 'block'
        
    } else {
        click.style.display = 'none'
    }
}
