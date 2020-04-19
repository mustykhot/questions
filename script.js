//variables setting
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var current;
var count=0;

//display final answer
function displayFinal(Answer) {
    if (Answer<=2) {
        document.getElementById('display_answer').innerHTML="Final Score is " + Answer;
        document.getElementById('display_reply').innerHTML="This is poor";
    }
    else if (Answer>2 && Answer<4) {
        document.getElementById('display_answer').innerHTML="Final Score is " + Answer;
        document.getElementById('display_reply').innerHTML="This is average";
    }
    else if (Answer>=4) {
        document.getElementById('display_answer').innerHTML="Final Score is " + Answer;
        document.getElementById('display_reply').innerHTML="Excellent";
    }
    
}
//start
function start() {
    //display first question and set current to none
    document.getElementById('wrap0').style.display='none';
    document.getElementById('wrap1').style.display='block';
}

function solution1() {

    
    answer1 = document.getElementById('firstAnswer');
    //change to upper case
    let ans1=answer1.value.toUpperCase();
    
    //compare answer 
    if (ans1 =='ADAM') {
        //increase count
        count++;
    }
    //display next question and set current to none
    document.getElementById('wrap1').style.display='none';
    document.getElementById('wrap2').style.display='block';

}


function solution2() {

    answer2 = document.getElementById('secondAnswer');
    ans2=answer2.value.toUpperCase();
     //compare answer 
    if (ans2=='EVE') {
        count++;
    
    }
    //display next question and set current to none
    document.getElementById('wrap2').style.display='none';
    document.getElementById('wrap3').style.display='block';

    
}

function solution3() {

    answer3 = document.getElementById('thirdAnswer');
    ans3=answer3.value.toUpperCase();
     //compare answer 
    if (ans3=='FEMUR') {
        count++;
    
    }
    //display next question and set current to none
    document.getElementById('wrap3').style.display='none';
    document.getElementById('wrap4').style.display='block';

    
}

function solution4() {

    answer4 = document.getElementById('fourthAnswer');
    ans4=answer4.value.toUpperCase();
     //compare answer 
    if (ans4=='JUPITER') {
        count++;
    
    }

    //display next question and set current to none
    document.getElementById('wrap4').style.display='none';
    document.getElementById('wrap5').style.display='block';

    
}

function solution5() {
    
    answer5 = document.getElementById('fifthAnswer');
    ans5=answer5.value.toUpperCase();
     //compare answer 
    if (ans5 =='CAIRO') {
        count++;
        
    }

    //display final answer
    displayFinal(count);
    //display next question and set current to none
    document.getElementById('wrap5').style.display='none';
    document.getElementById('wrapf').style.display='block';

    
}
//check answers
function check() {
    document.getElementById('wrapf').style.display='none';
    document.getElementById('wrapAnswer').style.display='block';
}
//reload page
function restart() {
    window.location.reload();
}

