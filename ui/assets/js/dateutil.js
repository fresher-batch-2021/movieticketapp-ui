function getTodayDate(){
    return new Date();
}

function getTodayDateAsString(){
    return new Date().toJSON().substr(0,10);
}


function isAfterToday(bookingDate){

    let bDate = new Date(bookingDate);
    return bDate >=  new Date();
}

function toDateWithoutTime(date){
    let dateObj = new Date(date);
    dateObj.setHours(0);
    dateObj.setMinutes(0);
    dateObj.setSeconds(0);
    return dateObj;
}

function toTime(showDate,time){
    let timeStr = time.split(":");
    let dateObj = new Date(showDate);
    dateObj.setHours(timeStr[0]);
    dateObj.setMinutes(timeStr[1]);
    dateObj.setSeconds(0);
    return dateObj;
}
