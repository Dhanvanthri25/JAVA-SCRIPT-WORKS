
function view()
{

    let table = document.getElementById("MyData");
    let row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
   

    cell1.innerHTML=document.getElementById("fname").value;
    cell2.innerHTML=document.getElementById("rollno").value;

    var m1=parseInt(document.getElementById("m1").value);
    var m2=parseInt(document.getElementById("m2").value);
    var m3=parseInt(document.getElementById("m3").value);
    var tot=m1+m2+m3;
    var avg=tot/3;


    cell3.innerHTML=m1;
    cell4.innerHTML=m2;
    cell5.innerHTML=m3;
    cell6.innerHTML=tot;
    cell7.innerHTML=avg;
    if(tot>=35)
    {
        cell8.innerHTML="Pass";
    }
    else
    {
        cell8.innerHTML="Failed"; 
    }
    var grade;
    if(avg>=90 && avg<=100)
    {
       grade="A";

    }
    if(avg>=80 && avg<90)
    {
        grade="B";

    }
    if(avg>=70 && avg<80)
    {
        grade="C";

    }
    if(avg>=60 && avg<50)
    {
        grade="D";

    }
    cell9.innerHTML=grade; 
   
                
}
   
   
    




