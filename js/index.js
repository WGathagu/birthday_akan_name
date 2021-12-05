//get form details
var birth_day, birth_month, birth_year, week_day, male_names, female_names, your_akan_name, femalegender, malegender;

//list of valid months
const valid_months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

//list of valid days
const valid_days = valid_months.concat(['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);

//list Male names
male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//list Female names
female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//validations
function validations() {
    
    if (!valid_days.includes(birth_day)) {
        alert("Day of Birth must be valid" +birth_day);
        return false;
    }
    else if (!valid_months.includes(birth_month)) {
        alert("Month of Birth must be valid");
        return false;
    }
    else{
        alert("Valid true");
        return true;
    }
}

//Check gender
function isFemale(){
    if(femalegender = true){
        return true;
    }
    else if(malegender = true){
        return false;
    }
    else if((femalegender = false) && (malegender = false)){
        alert("Select gender!");
    }
}

function weekDay() {
    let CC = birth_year.substring(0, 2);
    let YY = birth_year.substring(2, 4);
    let MM = birth_month;
    let DD = birth_day;

    week_day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log("week day "+week_day+CC+YY+MM+DD);

    return week_day;
}

//get weekday using birthday entry
week_day = weekDay();
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
        alert("Submited successfully. Your Akan Name is " + femaleNames());
    }
    else if(validations() && !isFemale()){
        alert("Submited successfully. Your Akan Name is " + maleNames());
    }
    else {
        alert("Please Try Again");
    }
    
}

//events
const form = document.querySelector("#myform");

form.addEventListener("submit", function (event) {
    //get entries
    birth_day = document.getElementById('day').value;
    alert(birth_day);
    birth_month = document.getElementById('month').value;
    birth_year = document.getElementById('year').value;
    femalegender = document.getElementById("female").checked
    alert(femalegender);
    malegender = document.getElementById("male").checked
    alert(malegender);

    findings();
}, false); 

