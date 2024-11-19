let input=document.getElementById("date")
let container=document.getElementById("container")
let result=document.getElementById("result")
input.max=new Date().toISOString().split("T")[0]

function calculate(){

    let birthDate=new Date(input.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth() +1;
    let y1=birthDate.getFullYear();


    let today=new Date();
    
    let currentDay=today.getDate();
    let currentMonth=today.getMonth() +1;
    let currentYear=today.getFullYear();


    let allDays, allMonths, allYears;

    allYears=currentYear-y1;
    if (currentMonth>=m1){
        allMonths=currentMonth-m1;
    }
    else{
        allYears--;
        allMonths=12+currentMonth-m1;
    }
    
    if (currentDay>=d1){
        allDays=currentDay-d1;
    }
    else{
        allMonths--;
        allDays=getDays(y1,m1)+currentDay-d1;
    }
    if (allMonths<0){
        allMonths=11;
        allYears--;
    }
    
    
    result.innerHTML=`you are <span>${allYears}</span> years, <span>${allMonths}</span> months and <span>${allDays}</span> days old!`;
    
}

function getDays(year,month){
    return new Date(year,month,0).getDate();
}