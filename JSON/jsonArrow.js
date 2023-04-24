


function person(){

    this.name='jack';
    this.age=56;
    this.sayName=function()
    {
        console.log(this.age);
    }
    console.log(this.age);
 }

 person();