function func1() {
    var prev=document.getElementById("p1");
    var next=document.getElementById("inp1").value;
    prev.firstChild.appendData(","+next);
 }