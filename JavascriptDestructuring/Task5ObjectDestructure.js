const student = 
{

    firstName: 'Monica',
};

Object.defineProperty(student, "getfirstname", 
{
    get : function () 
    {
        return this.firstName;
    }
});

Object.defineProperty(student, "setfirstname", 
{
    set : function (changename) 
    {
        this.firstName = changename;
    }
});

console.log(student.getfirstname);
student.setfirstname = "Sara";
console.log(student.getfirstname);