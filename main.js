function search() {
    var s = document.getElementById('s').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s}&units=imperial&mode=html&appid=c6d9b68391974991b8037b307621fa9c`)
    .then((res) => res.text())
    .then((data) => document.getElementById('weather').innerHTML = data)
}