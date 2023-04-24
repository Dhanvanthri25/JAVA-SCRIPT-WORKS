function msg()
{
    var name=(document.getElementById("name").value);

   document.getElementById("sname").value= document.getElementById("name").value;
    document.getElementById("sno").value = document.getElementById("no").value;
    var mark1=parseInt(document.getElementById("m1").value);
    var mark2=parseInt(document.getElementById("m2").value);
    var mark3=parseInt(document.getElementById("m3").value);
    document.getElementById("sm1").value=mark1;
    document.getElementById("sm2").value=mark2;
    document.getElementById("sm3").value=mark3;
    var sum= mark1+mark2+mark3;
    document.getElementById("sum").value=sum;
    var avg= sum/3;
    document.getElementById("avg").value=avg;
    if(mark1>40 && mark2>40 && mark3>40)
    {
        document.getElementById("result").value="pass";
    }
    else {
        document.getElementById("result").value="fail";
    }
    
    var grade;
    if(sum>90)
    {
        grade="A";
    }
    if(sum>75)
    {
       grade="B1" ;
    }
    if(sum>50)
    {
       grade="B" ;
    }
    if(sum>30)
    {
       grade="c" ;
    }
    else{
        grade="nil";
    }
    switch(grade)
    {
        case "A":
            document.getElementById("grade").value="A";
        break;
        case "B":
            document.getElementById("grade").value="B";
        break;
        case "B1":
            document.getElementById("grade").value="B1";
        break;
        case "c":
            document.getElementById("grade").value="C";
        break;
        case "nil":
            document.getElementById("grade").value="nil";
        break;

        default:
            document.getElementById("grade").value="E";
        break;
    }


}