// let person={
//     firstname:"Meera",
//     lastname:"Antony",
//     marks:{
//         maths:98,
//         english:96,
//         social:98
//     },
//     grade:function(m)
//     {
//         if(this.m>90)
//         {
//             return "good job";
//         }
//         else
//         {
//             return "Better luck next time";  
//         }
       
//     }
// }
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.marks.maths);
// console.log(person.marks.english);
// console.log(person.marks.social);
// console.log(person.grade(person.marks.maths));


let person={
    firstname:"Meera",
    lastname:"Antony",
    marks:{
        maths:90,
        english:96,
        social:98
    },
    grade:function()
    {
       return "GoodJob!!!!";
    }
}
console.log(person.firstname);
console.log(person["lastname"]);
console.log(person.marks.maths);
console.log(person["marks"]["english"]);
console.log(person.marks.social);
console.log(person["grade"]());