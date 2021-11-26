    function calculate(){
    var a = parseInt(document.getElementById('bookOne').value);
    var b = parseInt(document.getElementById('bookTwo').value);
    var c = parseInt(document.getElementById('bookThree').value);
    var d = parseInt(document.getElementById('bookFour').value);
    var e = parseInt(document.getElementById('bookFive').value);


    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please enter correct value");

    }
    else{
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
    }
    return false;
}