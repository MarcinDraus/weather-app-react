
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';


const WeatherBox = props => {

  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState('')
  const [pending, setPending] = useState(false);

  const handleCityChange = useCallback(city => {
   // console.log('cityName', city)
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d7dc5256560d9b30ad0ff54a39a7a90&units=metric`)
    .then((res) => {
      if (res.status === 200) {
        return res.json().then(data => {
          setPending(false);
          setError(false)
  //  .then(res => res.json())
  //  .then(data => {
  //   setPending(false);
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
    };
    //console.log(weatherData.city, weatherData.temperature, weatherData.icon, weatherData.description);
    setWeatherData(weatherData)
     console.log(data);
   });
  } else {
    setError(true);
    setPending(false);
    setWeatherData('');
  }
});
  }, []);

  return (
    <section>
      <PickCity action={ handleCityChange } />
            {/* <WeatherSummary city={weatherData.city}
      temperature={weatherData.temperature}
      icon={weatherData.icon}
      description={weatherData.description} setWeatherData={setWeatherData} /> */}
      { weatherData && <WeatherSummary {...weatherData} /> }

      {pending && <Loader />}
      { error &&
      <ErrorBox setError={setError}/>}
    </section>
  )
};

export default WeatherBox;
