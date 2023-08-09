import React from 'react';
import style from './style/List.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Card from '../components/Card';

function List() {
  const[countryData, setData] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const[searchInput, setSeatchInput] = useState('')

  useEffect(()=>{
    setIsLoading(true);
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>setData(res.data))
    setIsLoading(false)
  },[])

    const searchFilter = countryData.filter(country=>{
      return country.name.common.includes(searchInput)
    })
    
    const inputSearchHandler=(e)=>{
      setSeatchInput((e.target.value.toLowerCase()))
    }

    if (isLoading){
      return( 
        <Loader/>
        )
      }

  return (
    <div className={style.main}>
      <div className={style.template}>
      <div className={style.search}>
        <input type="text" onChange={inputSearchHandler} />
        <select name="region" id="region">
          <option value="All" selected>All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={style.cards}>
      {searchFilter.map((country, id)=>{
        return(
        <Card
        key={id}
        name={country.name.oficial}
        flag={country.flags.png}
        population={country.population}
        region={country.region}
        capital={country.capital}
        />
        )
      })}
      </div>
      </div>
    
    </div>
  );
}

export default List;