function validate() {
    let val = true;

    let names = document.formName.firstName.value;
    // let mails = document.formName.firstMail.value;
    let passwords = document.formName.firstPassword.value;
    let confirm = document.formName.firstConfirmPassword.value;

    if (names.length > 10) {
        val = false;
        alert('not submitted');
        seterror('nameerrorID', 'name is less than 20');
    }else{
         setclear('nameerrorID', '');
    }
    
    
   

    if (passwords.length < 10) {
        val = false;
        alert('password');
    }

    if (passwords != confirm) {
        val = false; 
         alert('not confirm');
        setpassword('errorpasswordID','password not matching')
      
    }else{
        setclear('errorpasswordID', '');
    }



    return val;
}

// function cleare(){
//     if (names.length > 10) {
//         val = true;
//         alert('submitted');
//         setclear('nameerrorID', '');
//     }

//     if (passwords != confirm) {
//         val = false; 
//          alert(' confirm');
//         setclear('errorpasswordID', '');
      
//     }
    

// }

function seterror(id, message) {

    document.getElementById(id).innerText = message;
}
function setclear(id){
    document.getElementById(id).innerText = ' ';
}

// function setpassword(id,message){
//     document.getElementById(id).innerText = message;
// }
