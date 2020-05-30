var countDownDate = new Date("June 4, 2020 01:29:30").getTime();

var x = setInterval(function() {

var now = new Date().getTime();  //calculating current time
var distance = countDownDate - now;  //calculating time remaining

var days = Math.floor(distance / (1000 * 60 * 60 * 24));  //calculating days remaining
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  //calculating hours remaining
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  //calculating minutes remaining
var seconds = Math.floor((distance % (1000 * 60)) / 1000);  //calculating seconds remaining

if (days == 0)
{
    if (hours == 0)
    {
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    }
    else
    {
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
}
else
{
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

if (distance < 0)
{
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}

}, 1000);
