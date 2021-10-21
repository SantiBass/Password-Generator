// Assignment code here
function generatePassword(){
  //  WHEN prompted for the length of the password
  //  THEN I choose a length of at least 8 characters and no more than 128 characters
 var lenght =  prompt("How long do you want your password be?");
 if(lenght <8){
   alert(" Password must be more than 8 character! ");
 return
 };
 if(lenght >128){
   alert(" Password must be less than 128 character! ");
 return
 };

 
 //  WHEN I click the button to generate a password
 //  THEN I am presented with a series of prompts for password criteria
 //  WHEN prompted for password criteria
 //  THEN I select which criteria to include in the password
 //  WHEN asked for character types to include in the password
 //  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
          var is_Lower = confirm("Do you want lower case?");
          var lower_case = "qqwertyuiopasdfghjklzxcvbnm";

          var is_Upper = confirm("Do you want upper case?");
          var up_case = "QWERTYUIOPASDFGHJKLZXCVBNM";

          var isn_Num = confirm("Do you want numbers ?");
 var num = "0123456789";

 var is_special = confirm("Do you want special characters?"); 
 var special = "!@#$%^&*()~`<>?{}|:";

 var user_choices = "";
 //  WHEN I answer each prompt
 //  THEN my input should be validated and at least one character type should be selected

 //  WHEN all prompts are answered
 if( is_Lower === true){
   user_choices = user_choices + lower_case
 }
 if( is_Upper === true){
   user_choices = user_choices + up_case
 }
 if( isn_Num === true){
   user_choices = user_choices + num
 }
 if( is_special === true){
   user_choices = user_choices + special
 }
 if(user_choices.length == 0 ){
   alert("You have to pick one of the option!")
  return
 }
 var text = "";
 //  THEN a password is generated that matches the selected criteria
for (i=0; i<lenght; i++ ){


 text += user_choices.charAt(Math.floor(Math.random() * user_choices.length));
}
 //  WHEN the password is generated
 //  THEN the password is either displayed in an alert or written to the page



var password = text;
return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
