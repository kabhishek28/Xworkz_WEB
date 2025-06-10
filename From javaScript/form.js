function validate() {
    let val = true;

    let names = document.formName.firstName.value;
    // let mails = document.formName.firstMail.value;
    let passwords = document.formName.firstPassword.value;
    let confirm = document.formName.firstConfirmPassword.value;

    if (names.length > 10) {
       
        seterror('nameerrorID', 'name is less than 20');
         val = false;
    } else {
        setclear('nameerrorID', '');
    }


    if (passwords.length < 10) {
        val = false;
    }

    if (passwords != confirm) {
       
        seterror('ConfirmPasswordId', 'password not matching')
         val = false;

    } else {
        setclear('errorpasswordID', '');
    }


    const gender = document.querySelector('input[name="gender"]:checked').value;
   console.log( gender);
    if (!gender) { 
        
        alert('please select gender')
        val = false;
        seterror('gendererror', 'select gender')

    } else {
        setclear('genderror', '');
    }

    const num = document.querySelector('input[name="num"]:checked');
    const num1 = Arrray.from(num).map(e => e.value)
    console.log('num1', num1);
    alert('stop here')
    return val;






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
function setclear(id) {
    document.getElementById(id).innerText = ' ';
}

// function setpassword(id,message){
//     document.getElementById(id).innerText = message;
// }
