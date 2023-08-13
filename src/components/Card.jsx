import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({ flag, name, population, region, capital, code }) {

  return (
    <div className={style.card}>
      <Link to={code}>
        <div className={style.flagImg}>
          <img src={flag} alt={name} />
        </div>
      </Link>
      <div className={style.countryName}>
        <h2>{name}</h2>
      </div>
      <div className={style.cardInfo}>
        <p><b>Population:</b> {Intl.NumberFormat("en-US").format(population)}</p>
        <p><b>Region:</b>  {region}</p>
        <p><b>Capital:</b> {capital?.join(', ')}</p>

      </div>
    </div >
  );
}

export default Card;