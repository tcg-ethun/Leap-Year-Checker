
function result(){

let number = 
    document.getElementById("input-box").value;

    document.getElementById("main");

    if (number%400==0||number%4==0&&number%100!=0 ){
        main.innerHTML = number + " is Leap Year";
        console.log( number  + " is  Leap Year");
    }
    
    else{
        main.innerHTML = number + " is't Leap Year";
        console.log( number +" is't Leap Year");
    }


}