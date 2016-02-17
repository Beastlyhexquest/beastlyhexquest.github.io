function dotw(){
  var d = new Date();
  var weekday = new Array(7);
  weekday[0]=  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[d.getDay()];
  document.getElementById("dotw").innerHTML = "Today is " + "<u>" + day + "</u>";
    var timetable = ["You shouldn't be at school today..",
  //Monday
  "P1:  English <br /><br /> P2:  French <br /><br /> After that, you have Business. <br /><br /> Before lunch you have History. <br /><br /> After lunch you have Maths<br /><br /> Finally you have Chemistry",
  //Tuesday
  "P1:  Chemistry <br /><br /> P2: Computing <br /><br /> P3:, you have Computing. <br /><br />  P4: you have History. <br /><br /> P5: you have Maths. <br /><br /> P6: you have Maths again <br /><br /> P7: you have English",
  //Wednesday
  "P1:  Maths <br /><br />P2:  Computing <br /><br />P3:  English <br /><br />P4: History <br />br/>P5: Physics <br /><br />P6: Physics",
  //Thursday
  "Firstly, you should have Biology. <br /><br /> Then, just before break you have Maths. <br /><br /> After that, you have Maths again. <br /><br />  After that you have Biology. <br /><br /> Before lunch you have English. <br /><br /> After lunch you have English again. <br /><br /> Finally you have French",
  //Friday
  "Firstly, you should have Business. <br /><br /> Then, just before break you have Business again. <br /><br /> After that, you have PE. <br /><br />  Before lunch you have PE again. <br /><br /> Finally you have History",
  "You shouldn't be at school today..."];
  var timetable = timetable[d.getDay()];
  document.getElementById("timetable").innerHTML = timetable;

}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = "The current time in Great Britain is " + "<u>"+ h+":"+m+":"+s + "</u>" + ".";
    var t = setTimeout(function(){startTime()},500);

}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function greet(){
  var today=new Date();
  var h=today.getHours();
  var greeting;
    if (h < 10) {
        greeting = "Good morning, Mr. Mason";
    } else if (h < 16) {
        greeting = "Good day, Mr. Mason";
    } else if (h < 22){
        greeting = "Good evening, Mr. Mason";
    } else {
      greeting = "You should be getting to sleep now, Mr. Mason";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

function OS(){
  var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

document.getElementById("OSName").innerHTML = OSName;
}
greet();
dotw();
checkTime();
startTime();
OS();
