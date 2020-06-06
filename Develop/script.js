//Ben's Code//

//when button is clicked, ask how long password is to be, then ask what character types, must be at least one of each type, then password is generated and user is notified via an alert or on page.
//Variables
//where final password will show on screen
var passwordText = document.querySelector("#password");
//generate password button
var generateBtn = document.querySelector("#generate");
//password
//var password = "";
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
    var initialPrompt = prompt("How many characters in your password? (between 8-128 characters)");
    if (initialPrompt > 128 || initialPrompt < 8) { alert("too many or too few characters") }
    else {
      var UpperCheck = confirm("Do you want Upper Case letters in your password?");
      var LowerCheck = confirm("Do you want lower case letters in your password?");
      var NumberCheck = confirm("Do you want numbers in your password?");
      var SymbolCheck = confirm("Do you want symbols in your password?");
      //var hasUpper = UpperCheck == true;
      //var hasLower = LowerCheck == true;
      //var hasNumber = NumberCheck == true;
      //var hasSymbol = SymbolCheck == true;
      var long = initialPrompt;
passwordText.value = password(long, lowerCase);
//console.log(password(12,lowerCase));
      function password (l,characters){
        var pwd ="";
        for (var i=0; i<l; i++){
          pwd += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return pwd;

    }

   } });
