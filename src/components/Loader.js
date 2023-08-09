import React from 'react';
import style from './Loader.module.css'

function Loader(prps) {
  return (
    <div className={style.loading}><span className='loader'></span></div>

  );
}

export default Loader;