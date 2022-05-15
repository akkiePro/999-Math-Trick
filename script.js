function f1() {
    num1 = document.getElementById("num1").value;
    document.write(num1);
}
function inputfn() {
    var x = document.getElementsByTagName("input");
    for (var i = 0; i < x.length; i++)
        if (x[i].value.length > 3) {
            x.value = x[i].value.slice(0, 3);
            document.getElementsByTagName("input")[i].value = x.value;
        }
}
function clickfn() {
    var y = 0;
    var x = document.getElementById("input1").value;
    var ans = document.getElementById("ans");
    if (x.length == 0) {
        alert("Enter first number");
        ans.innerHTML = "Answer will be provided";
    }
    else if (x == 0 || x == 00 || x == 000) {
        ans.innerHTML = "1998";
    }
    else if (x == 1 || x == 01 || x == 001) {
        ans.innerHTML = "1999";
    }
    else {
        y = x - 2;
        z = y.toString();
        ans.innerHTML = 2 + z;
    }
}
function clickfn2() {
    
    var x = document.getElementById("input2").value;
    if (x.length == 0) {
        alert("Enter second number");
        document.getElementById("l1").innerHTML = "Next number will be provided";
    }
    else
        document.getElementById("l1").innerHTML = 999 - x;

}
function keyupfn() {
    var x = document.getElementById("input3").value;
    if (x.length<=3 && x.length >=1) {
        document.getElementById("l2").innerHTML = 999 - x;
    }
}