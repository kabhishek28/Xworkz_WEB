// function onClick1() {
//     document.getElementsByClassName('class1').innerHTML = 'please provide minimum 10 digit';
//     console.log('logthis>>>dothis',doThis);
// }

// function onClick2() {
//     document.getElementsByClassName('class1')[1].innerHTML = 'please provide minimum 10 digit';
// }

// function onClick3() {
//     document.getElementsByName('Vk')[0].innerHTML = 'get element by name'    
// }


function submitForm() {
    let values = true;
    let nameInput = document.formName.nameID.value;
    let numberInput = document.formName.numberId.value;
    // let mailInput = document.formName.mailId.value;
    // let ageInput = document.formName.ageId.value;
    // let cityInput = document.formName.cityId.value;

    // alert(a+" "+b+" "+c+" "+d+" "+e);
    if (nameInput.length < 3 || nameInput.length > 20) {
        setError('id5','enter  name  ');
        values = false;
        
    }
    else{
        cleardata('id5');
        true;
        
    }
    // if (ageInput < 18) {
    //     alert('not 18 plus');
    //     values = false;
    // }
    if (numberInput.length != 10) {
        // alert('not 10 digit');
        values = false;
        // onClick();
        setError('id4','enter 10 digit ');
    }
    else{
        cleardata('id4');
        true;
      
    }
    // if (cityInput.length < 10) {
    //     alert('address length');
    //     values = false;
    //     setError();
    // }
    return values;
}

function setError(id,message) {
    console.log(id);
    console.log(message);
    document.getElementById(id).innerHTML=message;
    // clearForm(id)
    // alert('function is working ')
}


function clearForm(){
    // console.log(id)
    document.getElementById('nameErrorId').innerHTML='';
}

function cleardata(id){
    document.getElementById(id).innerHTML='';
}