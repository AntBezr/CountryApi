import React from 'react';
import style from './Card.module.css'

function Card({flag,name,population, region, capital}) {
  return (
    <div className={style.card}>
      <div className={style.flagImg}>
        {flag}
      </div>
      <div className={style.countryName}>
         <h2>{name}</h2>
      </div>
      <div className={style.cardInfo}>
        <p>Population: {population}</p> 
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        
      </div>
    </div>
  );
}

export default Card;