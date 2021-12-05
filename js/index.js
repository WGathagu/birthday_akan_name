//get form details
var birth_day, birth_month, birth_year, week_day, male_names, female_names, your_akan_name, femalegender, malegender;

//list Male names
male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//list Female names
female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//validations
function validations() {

    if (birth_day < 1 || birth_day > 31) {
        alert("Day of Birth must be valid" + birth_day);
        return false;
    }
    else if (birth_month < 1 || birth_month > 12) {
        alert("Month of Birth must be valid");
        return false;
    }
    else if (birth_year.length < 4 || birth_year.length > 4) {
        alert("Invalid Year");
        return false;
    }
    else {
        weekDay();
        return true;
    }
}

//Check gender
function isFemale(){
    if(femalegender){
        return true;
    }
    else if(malegender){
        return false;
    }
    else if((!femalegender) && (!malegender)){
        alert("Select gender!");
    }
}

function weekDay() {
    let CC = birth_year.substring(0, 2);
    let YY = birth_year.substring(2, 4);
    let MM = birth_month;
    let DD = birth_day;

    var day_position = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;

    var float_day = parseInt(day_position);
    //assign day position to weekday
    if( float_day = 0 ){
        week_day = 'Sunday';
    }
    else if(float_day = 1 ){
        week_day = 'Monday';
    }
    else if(float_day = 2 ){
        week_day = 'Tuesday';
    }
    else if(float_day = 3 ){
        week_day = 'Wednesday';
    }
    else if(float_day = 4 ){
        week_day = 'Thursday';
    }
    else if(float_day = 5 ){
        week_day = 'Friday';
    }
    else if(float_day = 6 ){
        week_day = 'Saturday';
    }
    else{
        week_day = 'Invalid Day';
    }
    
    console.log("Dayposition "+float_day);
    console.log("CC "+CC);
    console.log("YY "+YY);
    console.log("MM "+MM);
    console.log("DD "+DD);
    console.log("week day "+day_position);
    console.log("week day "+week_day);

    return week_day;
} 

//get weekday using birthday entry

function maleNames() {
    if (week_day = 'Sunday'){
        your_akan_name = male_names[0]
    }
    else if (week_day = 'Monday'){
        your_akan_name = male_names[1]
    }
    else if (week_day = 'Tuesday'){
        your_akan_name = male_names[2]
    }
    else if (week_day = 'Wednesday'){
        your_akan_name = male_names[3]
    }
    else if (week_day = 'Thursday'){
        your_akan_name = male_names[4]
    }
    else if (week_day = 'Friday'){
        your_akan_name = male_names[5]
    }
    else if (week_day = 'Saturday'){
        your_akan_name = male_names[6]
    }

    return your_akan_name;
}


function femaleNames() {
    if (week_day = 'Sunday'){
        your_akan_name = female_names[0]
    }
    else if (week_day = 'Monday'){
        your_akan_name = female_names[1]
    }
    else if (week_day = 'Tuesday'){
        your_akan_name = female_names[2]
    }
    else if (week_day = 'Wednesday'){
        your_akan_name = female_names[3]
    }
    else if (week_day = 'Thursday'){
        your_akan_name = female_names[4]
    }
    else if (week_day = 'Friday'){
        your_akan_name = female_names[5]
    }
    else if (week_day = 'Saturday'){
        your_akan_name = female_names[6]
    }

    return your_akan_name;
}

function findings(){
    if(validations() && isFemale()){
        alert("Submitted successfully. Your Akan Name is " + femaleNames());
    }
    else if(validations() && !isFemale()){
        alert("Submitted successfully. Your Akan Name is " + maleNames());
    }
    else {
        alert("Could not perform the calculation. Please Try Again");
    }
    
}

//events
const form = document.querySelector("#myform");

form.addEventListener("submit", function (event) {
    //get entries
    birth_day = document.getElementById('day').value;
    birth_month = document.getElementById('month').value;
    birth_year = document.getElementById('year').value;
    femalegender = document.getElementById("female").checked
    malegender = document.getElementById("male").checked

    findings();
}, false); 

