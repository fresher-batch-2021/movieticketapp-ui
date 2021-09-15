class Theatre {

    constructor(theatreObj) {

        this.timings = theatreObj.timings;
    }

    getTimings(showDate = null) {
        let availableTimings = [];


        //if it is not same day, all timings
        if (showDate == null || dayjs().isBefore(showDate)) {
            availableTimings.push(...this.timings);
        }
        else {

            for (let showtime of this.timings) {

                let showDateTime = toTime(showDate, showtime);//new Date() ;


                const isAfter = moment(showDate).isAfter(showDateTime);
                const isTimingAfter = moment().isBefore(showDateTime);

                console.log("Show Date " + showDate, 
                 "isAfter:", isAfter, "isTimingAfter:", isTimingAfter);


                if (isTimingAfter) {
                    availableTimings.push(showtime);
                }
            }
        }
        return availableTimings;
    }


}


// const theatreObj = new Theatre({ timings: ["10:00", "15:00", "17:00"] });
// //Test Case 1 : Today
// console.log("Today:" , theatreObj.getTimings("2021-09-14"));

// //Test Case 2 : Tomorrow
// console.log("Tomorrow:" , theatreObj.getTimings("2021-09-15"));


// //Test Case 3 : Past Date
// console.log("Past Date:", theatreObj.getTimings("2021-09-13"));