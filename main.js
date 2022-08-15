function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}
getLocation();
function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&mode=html&appid=c6d9b68391974991b8037b307621fa9c`)
    .then((res) => res.text())
    .then((data) => document.getElementById('your-weather').innerHTML = data)
}


function search() {
    var s = document.getElementById('s').value;
    if (s) {
      document.getElementById('output').style.padding = '0 1rem 1rem';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s}&units=imperial&mode=html&appid=c6d9b68391974991b8037b307621fa9c`)
      .then((res) => res.text())
      .then((data) => document.getElementById('output').innerHTML = data)
      document.getElementById('output').style.padding = '0 1rem 1rem';
    }
}
