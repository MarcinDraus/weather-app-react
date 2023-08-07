
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = ({action}) => {
 const [city, setCity] = useState('');
 const handleSubmit = (c) => {
  c.preventDefault();
  action(city);
  setCity('');
 };
 
  return (
    <form onSubmit={handleSubmit} className={styles.pickCityForm}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={c => setCity(c.target.value)} />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;
