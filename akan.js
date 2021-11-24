
var user = document.getElementById('user');
user.addEventListener('submit',akanName);

const femalNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleName=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satyrday'];

function akanName(event){
    event.preventDefault();

    var username = document.getElementById('yourName').value.trim();
    var doB = document.getElementById('date').value.trim();
    var gender = document.getElementsByClassName('yourSex')

    // find index of thhe day from the entered dates
    var my_doB= doB.toString();
            my_doB = new Date(my_doB);            
         var dx= my_doB.getDay(); 

    if (  username === ""){
        alert("Please enter name....");
        return false;
    }else if (doB =="") {
        alert("Please select date!!!")
    } else if(male.checked ==true) {
        
               
            alert(`You akan name is ${maleName[dx]} born on ${weekDays[dx]}`);        
    }else if(female.checked ==true) {        
              
            alert(`You akan name is ${femalNames[dx]} born on ${weekDays[dx]}`);
    }
}