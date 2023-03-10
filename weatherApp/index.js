const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error = document.querySelector('.not-found');
const image = document.querySelector('.weather-box img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');

const getWeather = () => {
	const APIKey = 'a0376d20e4a53ab7ed7fc18ffd27823d';
	const city = searchInput.value;

	if (city === '') {
		return;
	};

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
		.then(response => response.json())
		.then(json =>  {
			if (json.cod === '404') {
				container.style.height = '400px';
				weatherBox.style.display = 'none';
				weatherDetails.style.display = 'none';
				error.style.display = 'block';
				error.classList.add('fadeIn');
				return;
			};

			error.style.display = 'none';
			error.classList.remove('fadeIn');

			switch (json.weather[0].main) {
				case 'Clear':
					image.src = './images/clear.png';
					break;

				case 'Rain':
					image.src = './images/rain.png';
					break;

				case 'Snow':
					image.src = './images/snow.png';
					break;

				case 'Clouds':
					image.src = './images/cloud.png';
					break;

				case 'Haze':
					image.src = './images/mist.png';
					break;
				
				default: 
					image.src = '';
			};

			temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
			description.innerHTML = `${json.weather[0].description}`;
			humidity.innerHTML = `${json.main.humidity}%`;
			wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

			weatherBox.style.display = '';
			weatherDetails.style.display = '';
			weatherBox.classList.add('fadeIn');
			weatherDetails.classList.add('fadeIn');
			container.style.height = '590px';
		});
};

search.addEventListener('click', getWeather);
searchInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		getWeather();
	}
});
