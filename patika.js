document.getElementById('myName').innerHTML=prompt("Adınız nedir?") 
function showTime()
    {
        var dateTime= new Date();
        var hrs = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();
        var session = document.getElementById("myClock");
        let day = dateTime.getDay(); 

        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        console.log(day);
        switch(day){
            case 0:
                day = "Sunday";
            case 1:
                day = "Monday";
            case 2: ;
                day = "Tuesday";
            case 3:
                day =  "Wednesday";
            case 4:
                day =  "Thursday";
            case 5:
                day =  "Friday";
            case 6: 
                day =  "Saturday";
        }
        document.getElementById("output").innerHTML = day;
    }
    setInterval(showTime,1000);
    