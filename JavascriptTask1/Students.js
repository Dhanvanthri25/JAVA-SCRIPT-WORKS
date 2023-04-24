function add()
{
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("roll_no").value;
    var tamilMark = parseInt(document.getElementById("t_mark").value);
    var englishMark = parseInt(document.getElementById("e_mark").value);
    var mathMark = parseInt(document.getElementById("m_mark").value);
    var science = parseInt(document.getElementById("s_mark").value);
    var social = parseInt(document.getElementById("ss_mark").value); 
 
        var total = tamilMark + englishMark + mathMark + science + social;

        var average = total / 5;

        var grade = null;

        if ( ( tamilMark >= 40 ) && ( englishMark >= 40 )  && ( mathMark >= 40 )  && ( science >= 40 )  && ( social >= 40 ) )
        {
            grade = "Pass";
        }
        else
        {
            grade = "Fail";
        }

        let table = document.getElementById("MyData");
        let row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(3);
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell10 = row.insertCell(10);
        console.log(name);
        cell1.innerHTML = name;
        cell2.innerHTML = rollNo;
        cell3.innerHTML = tamilMark;
        cell4.innerHTML = englishMark;
        cell5.innerHTML = mathMark;
        cell6.innerHTML = science;
        cell7.innerHTML = social;
        cell8.innerHTML = total;
        cell9.innerHTML = average;
        cell10.innerHTML = grade;

    }

