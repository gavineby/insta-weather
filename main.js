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
    .then((data) => document.getElementById('yourWeather').innerHTML = data)
}


function search() {
    var s = document.getElementById('s').value;
    if (s != '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s}&units=imperial&mode=html&appid=c6d9b68391974991b8037b307621fa9c`)
      .then((res) => res.text())
      .then((data) => document.getElementById('weather').innerHTML = data)
      document.getElementById('weatherContainer').style.padding = '0 1rem 1rem';
    } else {
      document.getElementById('weatherContainer').style.padding = '0 1rem 1rem';
      document.getElementById('weather').innerHTML = 'Blank Location'
    }
}