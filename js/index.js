const loadweather = (id) => {
    const apiKey = 'e028edb0e03195ec644f1b758bae87a4';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}&units=metric`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(e => console.log(e));
}
const displayWeather = data => {
    console.log(data);
    const { name, main, weather } = data;
    const temperature = main.temp;
    const cityWeather = weather[0].main;


    const setCity = document.getElementById('city');
    setCity.innerText = `${name}`
    document.getElementById('temperature-field').innerText = `${temperature}`;
    document.getElementById('weather-field').innerText = `${cityWeather}`;

}


document.getElementById('search-btn').addEventListener('click', function () {
    userText();

})

document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        userText();
    }

});


const userText = () => {
    const inputTextelemtnt = document.getElementById('input-field');
    const inputText = inputTextelemtnt.value;
    inputTextelemtnt.value = '';
    loadweather(inputText);

}


loadweather('dhaka')