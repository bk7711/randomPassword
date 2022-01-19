

var generateBtn = document.querySelector("#generate");

//global variables
var length = 0;
var password = "";
var wholePassword = "";
//object to house the allCharacters value pairs based on the user responses.
var pickFrom = {};

var allCharacters = {}
allCharacters.capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
allCharacters.lower = "abcdefghijklmnopqrstuvwxyz".split("");
allCharacters.numbers = "1234567890".split("");
allCharacters.special = "~!@#$%^&*+".split("");


var askLength = function(){
    //ask how many characters
        length = prompt("How many characters should your password have? Choose a number between 8 and 128");
        //make sure user inputs a value and that it is between 8 and 128
            if(length === null || length === ""){
                alert("Please choose a password length");
                askLength();
            }else if (length < 8 || length > 128){
                alert("Please choose a number between 8 and 128");
                askLength();
            }else{
                return;
            }
};
//ask if they want capital letters
var askCapital = function(){
    var capital = confirm("Do you want to include capital letters?");
    if(capital){
        //create a key value pair in object pickFrom
        pickFrom["capital"] = allCharacters.capital;
    }
};
    
//ask if they want lower case letters
var askLower = function(){
    var lowerCase = confirm("Do you want to include lower case letters?");
    if(lowerCase){
        //create a key value pair in object pickFrom
        pickFrom["lower"] = allCharacters.lower;
    }
};
//ask if they want numbers
var askNumbers = function(){
    var numbers = confirm("Do you want to include numbers?");
    if(numbers){
        //create a key value pair in object pickFrom
        pickFrom["numbers"] = allCharacters.numbers;
    }
};
//ask if they want special characters
var askSpecial = function(){
    var special = confirm("Do you want to include special characters?");
    if(special){
        //create a key value pair in object pickFrom
        pickFrom["special"] = allCharacters.special;
    }
};



var generatePassword = function(){ 

    function clearPassword(){
        if(chosenCharacters.length > length){
                chosenCharacters = [];
                i = length;
            }
        };
    askLength();
    askCapital();
    askLower();
    askNumbers();
    askSpecial();
    
    var i = length;
    var arrKeys = [];
    var arrValues = [];
    var chosenCharacters = [];

    while(i > 0){
        //create array with just keys from pickFrom
        var arrKeys = Object.keys(pickFrom);
        //randomly choose a number
        var rn = Math.floor(Math.random() *(arrKeys.length));
        //identify that value in arrKeys and find same value in pickFrom and save to value variable
        var arrValues = pickFrom[arrKeys[rn]];
        //randomly choose another number based on number of items in chosen key i.e. arrValue
        var vn = Math.floor(Math.random()* arrValues.length);
        //take number and identify the index in value that corresponds
        var character = arrValues[vn];
        //add that value to the password array
        chosenCharacters.push(character);
        i --;
        //clearing chosenCharacter
        
    }
    //change array to a string
    password = chosenCharacters.join(" ");
    clearPassword();
};



// // Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   
  }


//Add event listener to generate button
generateBtn.addEventListener("click", function(){  
    
    generatePassword();
    writePassword();

});











