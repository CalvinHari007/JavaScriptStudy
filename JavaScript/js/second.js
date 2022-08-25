var dataButton = document.getElementById("data-button");
var testData = document.getElementById("test-data");

dataButton.addEventListener("click", function(){
    var dataReq = new XMLHttpRequest();
    dataReq.open('GET','http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true'); 

    dataReq.onload = function() {
        
        var recdString = JSON.parse(dataReq.responseText);
        renderOutput(recdString);
    }

    dataReq.send();
});

function renderOutput (recdString) {
    var disString = "";
    for(i=0; i < recdString.length; i++){
        disString += "<p>" ;
        disString += (i+1) +  ". Fname : " +  recdString[i].fname + "<br>";
        disString += "   Lname : " +  recdString[i].lname + "<br>";
        disString += "   Tel : " +  recdString[i].tel + "<br>";
        disString += "   City : " +  recdString[i].city + "<br>";
        disString += "   State : " +  recdString[i].state;
        disString += "</p>" ;
    }

    testData.insertAdjacentHTML('beforeend',disString)
}


