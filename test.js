// setInterval makes sure this function is run every second.
// This funtion will poll the text file for new changes every second.
// TODO change the python code to poll google API every second.
setInterval(function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        // if the http request (website request) returns a 200 status ok and a ready state
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            var txt = xmlhttp.responseText;
            // inserts the txt into the html paragraph
            document.getElementById("Queue").textContent=txt;
        }
    };
    xmlhttp.open("GET","file.txt",true);
    xmlhttp.send();
}, 1000); // this is 1000 miliseconds. Change this number if you want the website to update more or less frequently
