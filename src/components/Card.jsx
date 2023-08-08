import React from 'react';
import style from './Card.module.css'

function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.flagImg}>
        img
      </div>
      <div className={style.cardInfo}>
        germ
      </div>
    </div>
  );
}

export default Card;