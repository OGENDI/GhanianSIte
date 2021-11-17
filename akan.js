document.getElementById('user').addEventListener('submit',function(event){
    event.preventDefault();
    var dayOfBirth = document.getElementById('DD').value;
    var monthOfBirth = document.getElementById('MM').value;
    var yearOfBirth = document.getElementById('YYYY').value;
    var male = document.getElementById('sex0').value;
    var female = document.getElementById('sex1').value;
    var maleNames = maleNames[Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame]
    // var gender = document.querySelectorAll('input[name="yourSex"]').value;
    // alert(gender);

    if(dayOfBirth === '' || monthOfBirth === '' || yearOfBirth === '') {
        alert('One of the fields is empty!');
    } else if(dayOfBirth <= 0 || dayOfBirth > 31) {
        alert('Days cannot be 0 or negative number or cannot be greater than 31!');
    } else if(monthOfBirth <= 0 || monthOfBirth > 12) {
        alert('Months cannot be 0 or negative number or cannot be greater than 12');
    } else if(yearOfBirth.trim().length !== 4) {
        alert('Year of birth has 4 digits e.g 1980');
    } else 
});