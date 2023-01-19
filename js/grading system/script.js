function total () {
    var eng = parseInt (document.getElementById ("eng").value);
    var lan = parseInt (document.getElementById ("lan").value);
    var mat = parseInt (document.getElementById ("mat").value);
    var sci = parseInt (document.getElementById ("sci").value);
    var soc = parseInt (document.getElementById ("soc").value);

    if (eng > 100 || lan > 100 || mat > 100 || sci > 100 || soc >100 ) {
        alert ("Please Enter Correct Marks");
    }
    else {
        var total = eng + lan + mat + sci + soc;
        document.getElementById("total").innerHTML = "English Marks :"  + eng + "<br> Language Marks :" +lan + "<br> Mathematics Marks :" + mat + "<br> Science Marks : " + sci + "<br> Social Science Marks :" + soc + "<br>       <br> Total Marks :" + total; 
    }
}

    function average () {
        var eng = parseInt (document.getElementById ("eng").value);
        var lan = parseInt (document.getElementById ("lan").value);
        var mat = parseInt (document.getElementById ("mat").value);
        var sci = parseInt (document.getElementById ("sci").value);
        var soc = parseInt (document.getElementById ("soc").value);
    
        if (eng > 100 || lan > 100 || mat > 100 || sci > 100 || soc >100 ) {
            alert ("Please Enter Correct Marks");
        }
        else {
            var total = eng + lan + mat + sci + soc;
            var average = (total / 5);
            document.getElementById("average").innerHTML = "Average :"  + average + "%";   
        }
    }

    function grade () {
        var eng = parseInt (document.getElementById ("eng").value);
        var lan = parseInt (document.getElementById ("lan").value);
        var mat = parseInt (document.getElementById ("mat").value);
        var sci = parseInt (document.getElementById ("sci").value);
        var soc = parseInt (document.getElementById ("soc").value);
    
        if (eng > 100 || lan > 100 || mat > 100 || sci > 100 || soc >100 ) {
            alert ("Please Enter Correct Marks");
        }
        else {
            var total = eng + lan + mat + sci + soc;
            var average = (total / 5);
            console.log(average);

            if (average>= 80 && average <=100){
                document.getElementById("grade").innerHTML = "Your Grade is : <bold> A </bold>"
            }
            else if (average>= 60 && average < 80) {
                document.getElementById("grade").innerHTML = "Your Grade is : <bold> B </bold>" 
            } 
            else if (average>= 40 && average < 60) {
                document.getElementById("grade").innerHTML = "Your Grade is : <bold> C </bold>" 
            } 
            else {
                document.getElementById("grade").innerHTML = "Your Grade is : <bold> F </bold>"
        
             }
        }
    }
