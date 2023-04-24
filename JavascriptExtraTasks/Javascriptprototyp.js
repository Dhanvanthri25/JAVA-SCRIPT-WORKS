class Employee {
    constructor(fname, sname) {

        this.fname = fname;

        this.sname = sname;
    }
}

Employee.prototype.company="Zoho";
var e=new Employee("Meera","Antony");
var e1=new Employee("Heera","Antony");
console.log(e.fname+" "+e.sname+" "+e.company);