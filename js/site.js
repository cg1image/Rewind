// get the string from the page
//controller function
function getvalue(){

    getElementById("alert").classList.add("invisable");
    
    let userString=document.getElementById("userString").Value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //let name = Cliffy
    //name[0] = "C";
    //name[5] = "y"
    //last position in an array name.length - 1

    //reverse a string using a for loop
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];     
    }

    return revString;
}

//Display the reversed string to the user
//View Function
function displayString(revString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}