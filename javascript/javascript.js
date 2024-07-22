function check1(){
    document.getElementById("b1").style='background-color:red; color:white';
    document.getElementById("op1").style.backgroundColor="red";
    for(i=0;i<4;i++){
        if(i==0){
            continue;
        }
        else{
            document.getElementsByClassName("btn")[i].style='background-color:white; color:black';
            document.getElementsByClassName("option")[i].style.backgroundColor="rgb(246, 172, 0)";
        }
    }
}

function check2(){
    document.getElementById("b2").style='background-color:red; color:white';
    document.getElementById("op2").style.backgroundColor="red";
    for(i=0;i<4;i++){
        if(i==1){
            continue;
        }
        else{
            document.getElementsByClassName("btn")[i].style='background-color:white; color:black';
            document.getElementsByClassName("option")[i].style.backgroundColor="rgb(246, 172, 0)";
        }
    }
}

function check3(){
    document.getElementById("b3").style='background-color:red; color:white';
    document.getElementById("op3").style.backgroundColor="red";
    for(i=0;i<4;i++){
        if(i==2){
            continue;
        }
        else{
            document.getElementsByClassName("btn")[i].style='background-color:white; color:black';
            document.getElementsByClassName("option")[i].style.backgroundColor="rgb(246, 172, 0)";
        }
    }
}

function check4(){
    document.getElementById("b4").style='background-color:green; color:white';
    document.getElementById("op4").style.backgroundColor="green";
    for(i=0;i<4;i++){
        if(i==3){
            continue;
        }
        else{
            document.getElementsByClassName("btn")[i].style='background-color:white; color:black';
            document.getElementsByClassName("option")[i].style.backgroundColor="rgb(246, 172, 0)";
        }
    }
}

function reset(){
    for(i=0;i<4;i++){
        document.getElementsByClassName("btn")[i].style='background-color:white; color:black';
        document.getElementsByClassName("option")[i].style.backgroundColor="rgb(246, 172, 0)";
    }
}

