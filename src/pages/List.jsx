import React from 'react';
import style from './style/List.module.css'
import Card from '../components/Card.jsx';

function List(props) {
  return (
    <div className={style.main}>
      <div className={style.template}>
      <div className="search">
          <input type="text"  />
      </div>
      <div className={style.cards}>
        <Card/>
      </div>
      </div>
    
    </div>
  );
}

export default List;