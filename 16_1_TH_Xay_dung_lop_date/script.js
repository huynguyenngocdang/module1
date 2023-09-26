class MyDate {
    constructor(day, month, year) {

        this.day = day;

        this.month = month;

        this.year = year;

        this.getDay = function () {
            return this.day;
        };
        this.getMonth = function () {
            return this.month;
        };
        this.getYear = function () {
            return this.year;
        };
        this.setDay = function (day) {
            this.day = day;
        };
        this.setMonth = function (month) {
            this.month = month;
        };
        this.setYear = function (year) {
            this.year = year;
        };
        this.setDate = function (day, month, year) {
            if (day < 10) {
                this.day = "0" + day;
            } else {
                this.day = day;
            }
            if (month < 10) {
                this.month = "0" + month;
            } else {
                this.month = month;
            }

            this.year = year;
        };

    }
}
// let date = new MyDate(2, 2, 2007);

// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);

// date.setDate(5, 5, 2020);

// let day = date.getDay();

// let month = date.getMonth(); 

// let year = date.getYear(); 

// alert(day + "/" + month + "/" + year);
let date = new MyDate();

function getDate() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    date.setDate(day, month, year);
    alert(date.day + "/" + date.month + "/" + date.year);
}