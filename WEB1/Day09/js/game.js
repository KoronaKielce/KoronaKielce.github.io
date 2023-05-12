//This file is needed for
//input, quiz and truth game
//global variable for first name
//a variable that can be used in al functions

let fname="";

//Function to get infro from intro form
//check input and produce a sentence
function greet(){
    let greetParagraph = document.getElementById("greet");
    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname")
    let age = document.getElementById("age").value;
    let week = document.getElementById("w").value;
    //check the input
    if(fname==="" || lname===""){
        alert("First and last name cannot be an empty string");
        return;
    }
    if(age==="" || age < 18){
        alert("Invalid age! You must be 18 or older");
    }
    if(week===""|| week !== fortnite){
        alert("!You are wrong!!!never come again!!! big Virue!");
    }
    //Update output Paragraph
    greetParagraph.innerHTML = "Grretings " +age+"year old "+fname+"!";
} 

//function to play the trivia game
function trivia1(){
    //get hndle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");
    // get handles valyes from radio selections
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    //give the results
    if(chocSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong";
    }
    else if(tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong";
    }
    else if(honeySelected){
        triviaAnswer.innerHTML = fname + ", you are right";
    }
    else { 
        triviaAnswer.innerHTML = "uh oh, something went wrong!";
    }

}
function trivia2(){
   
    let triviaAnswer = document.getElementById("trivia-answer2");
    
    let XCSelected = document.getElementById("Cross-Country").checked;
    let EuroSelected = document.getElementById("European-football").checked;
    let AmerSelected = document.getElementById("American-Football").checked;
    
    if(XCSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong";
    }
    else if(AmerSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong";
    }
    else if(EuroSelected){
        triviaAnswer.innerHTML = fname + ", you are right";
    }
    else { 
        triviaAnswer.innerHTML = "uh oh, something went wrong!";
    }

}

function trivia3(){
   
    let triviaAnswer = document.getElementById("trivia-answer3");
    
    let dogSelected = document.getElementById("dog").checked;
    let planeSelected = document.getElementById("plane").checked;
    let tomatoSelected = document.getElementById("tomato").checked;
    
    if(dogSelected && tomatoSelected){
        triviaAnswer.innerHTML = fname + ", you are right";
    }
    else if(dogSelected || tomatoSelected){
        triviaAnswer.innerHTML = fname + ", you are almost right";
    }
    else if(planeSelected){
        triviaAnswer.innerHTML = fname + ", you are almost";
    }
    else { 
        triviaAnswer.innerHTML = "uh oh, something went wrong!";
    }

}
