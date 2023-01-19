
// JSON (JavaScript Object Notation)
// a lightweight data-interchange format for high interoperability between programming languages.
// useful for temporary data such as user generated data
// Most web APIs transfer data in JSON
// JSON syntax looks very similar to JavaScript object literal notation.
// JSON transmitted by APIs are sent as bytes, and your application receives it as a string.
// This can be converted to Javascript objects via JSON.parse()

// add a JavaScript event to run code only after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // add an onClick event handler
  document.getElementById('getMessage').onclick = function(){
    // change the inner text / text content of an element
    document.getElementsByClassName('message')[0].textContent="Here is the message";
  };
 });


document.addEventListener()
.getElementById()
.getElementsByClassName()
.onclick

// example AJAX / JSON request ran onclick that returns objects from the cats.json API and turns it into a string
// GET
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};

// or POST
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);


// alternatively, use the JavaScript fetch() method

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

console.log(json[2].codeNames[1]); // fetch some specific object data from the output code

// output HTML from the json Objects

let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});

// note, using innerHTML can make a site vulnerable to cross-site scripting attacks

// filter JSON output to just have the elements you want:

json = json.filter(function(val) {
  return (val.id !== 1);
});

// geolocation:

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
