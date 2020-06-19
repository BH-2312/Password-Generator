//when button is clicked, ask how long password is to be, then ask what character types, must be at least one of each type, then password is generated and user is notified via an alert or on page.
//Variables
//where final password will show on screen
var passwordText = document.querySelector("#password");
//generate password button
var generateBtn = document.querySelector("#generate");
// lower case characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//Upper case characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Number characters
var digits = "123456789";
// Symbol characters
var symbols = "!@#$%^&*()";

//password function//

//initial prompt after button click to gether length info//

generateBtn.addEventListener("click",
  function initialClick() {
    //variable for initial prompt
    var initialPrompt = prompt("How many characters do you want in your password? (between 8-128 characters)");
    //if statement to see if function should proceed or page should reload
    if (initialPrompt > 128 || initialPrompt < 8) { 
      alert("too many or too few characters")
      location.reload();
    }
  
    //if statement with prompts regarding the type of characters in password providing characters between 8-128
    if (initialPrompt < 129 && initialPrompt > 7) { 
    var UpperCheck = confirm("Do you want Upper Case letters in your password?");
    var LowerCheck = confirm("Do you want lower case letters in your password?");
    var NumberCheck = confirm("Do you want numbers in your password?");
    var SymbolCheck = confirm("Do you want symbols in your password?");
    var hasUpper = UpperCheck == true;
    var hasLower = LowerCheck == true;
    var hasNumber = NumberCheck == true;
    var hasSymbol = SymbolCheck == true;
    var length = initialPrompt;
    var characters = ""
    //if statements to generate character string for password
    if (hasLower) { characters += lowerCase };
    if (hasUpper) { characters += upperCase };
    if (hasNumber) { characters += digits };
    if (hasSymbol) { characters += symbols }
    if (characters == "") { 
      alert("You need to input a character type!. You need to start again!!") 
      location.reload()
    }
    //code that produces on-screen output
    passwordText.value = password(length, characters)

    // function to return password     
    function password(length, characters) {
      var pwd = "";
      for (var i = 0; i < length; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return pwd;
    }
  }});