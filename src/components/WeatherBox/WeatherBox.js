
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';


const WeatherBox = props => {


  const [weatherData, setWeatherData] = useState('')

  const handleCityChange = useCallback(city => {
    console.log('cityName', city)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d7dc5256560d9b30ad0ff54a39a7a90&units=metric`)
   .then(res => res.json())
   .then(data => {
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
    };
    console.log(weatherData.city, weatherData.temperature, weatherData.icon, weatherData.description);
    setWeatherData(weatherData)
     console.log(data);
   });
  }, []);

  return (
    <section>
      <PickCity action={ handleCityChange } />
      <WeatherSummary city={weatherData.city}
      temperature={weatherData.temperature}
      icon={weatherData.icon}
      description={weatherData.description} setWeatherData={setWeatherData} />
      <Loader />
    </section>
  )
};

export default WeatherBox;
