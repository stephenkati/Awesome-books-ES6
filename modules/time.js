import { DateTime } from "./luxon.js";

export let time = ()=>{
    const timer = document.getElementById("current-time");

    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];

    // date postfix
    let monthday = '';
    if(DateTime.local().c.day == 1 || DateTime.local().c.day == 21 ||DateTime.local().c.day == 31){
        monthday = 'st';
    }
    else if(DateTime.local().c.day == 2 || DateTime.local().c.day == 22 ){
        monthday = 'nd';
    }
    else if(DateTime.local().c.day == 3 || DateTime.local().c.day == 23 ){
        monthday = 'rd';
    }
    else{
        monthday = 'th';
    }

    // am and pm time
    let daytime = '';
    if(DateTime.local().c.hour <= 12 && DateTime.local().c.minute <= 0){
        daytime = 'am';
    }else{
        daytime = 'pm';
    }

    timer.innerHTML = month[DateTime.local().c.month-1] +" "+DateTime.local().c.day+monthday+" "+DateTime.local().c.year+" "+DateTime.local().c.hour+" : "+ DateTime.local().c.minute+" : "+ DateTime.local().c.second+" "+daytime;
}