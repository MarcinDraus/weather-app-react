
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, } from 'react';


const WeatherBox = props => {

  const handleCityChange = useCallback(city => {
    console.log('cityName', city)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d7dc5256560d9b30ad0ff54a39a7a90&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
   });
  }, []);

  return (
    <section>
      <PickCity action={ handleCityChange } />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;
