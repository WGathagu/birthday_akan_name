//get form details
var birth_day, birth_month, birth_year, week_day, male_names, female_names, your_akan_name;

//list of valid months
 var valid_months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//list of valid days
 var valid_days = valid_months.push([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

//list Male names
male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
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
}

//list Female names
female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
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
}

//validations
function validations() {
    var submitOK = "true";
    //get entries
    birth_day = document.getElementById('day').value;
    birth_month = document.getElementById('month').value;
    birth_year = document.getElementById('year').value;

    if (!valid_days.contains(birth_day)) {
        alert("Day of Birth must be valid");
        submitOK = "false";
    }

    if (!valid_months.contains(birth_month)) {
        alert("Month of Birth must be valid");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
}

//events
const form = document.getElementsByClassName('form-group');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(validations() && isFemale()){
        alert("Submited successfully. Your Akan Name is " + your_akan_name);
    }
    else if(validations() && isMale()){
        alert("Submited successfully. Your Akan Name is " + your_akan_name);
    }
    else {
        alert("Please Try Again");
    }
})

