class Moment extends Date{

    constructor(year) {
        super(year);
    }

}

// var m=new Moment();
var m1=new Moment("August 15,1947 20:22:10");
console.log("Current date");
// console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());
console.log(m1.getFullYear());