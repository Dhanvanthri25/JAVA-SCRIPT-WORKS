class parent{
    display()
    {
        console.log("Hi Meera");
    }
}
class child extends parent{
    display(name)
    {
        console.log("Hi Heera Antony");
    }
    display()
    {
        console.log("Hi Meera Antony");
    }
}
var c=new child;
c.display();
c.display("sownthi");