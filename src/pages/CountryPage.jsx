import React from 'react';
import style from './style/CountryPage.module.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

function CountryPage(props) {
  const params = useParams();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/name/${params.countryName}`).then(res => setData(res.data[0]))
    setIsLoading(false)
  }, [])

  let curKeys = countryData.currencies && Object.keys(countryData.currencies).map((curr) => (Object.keys(countryData.currencies[curr]).map((val) => ((' ' + countryData.currencies[curr][val])))))

  let languages = countryData.languages && Object.keys(countryData.languages).map((val) => (countryData.languages[val] + ' '))

  if (isLoading)
    <Loader />
  else return (
    <div className={style.main}>
      <div className={style.back}>
        <button className={style.backBtn} type='button' onClick={() => navigation(-1)}><span className="material-symbols-outlined">
          arrow_back
        </span><b>Back</b> </button>
      </div>
      <div className={style.info}>
        <div className={style.flag}>

          <img src={countryData.flags?.png} alt={countryData.flags?.alt} />
        </div>
        <div className={style.countryInfo}>
          <div className={style.left}>
            <h2>{countryData.name?.common}</h2>
            <p><b>Native Name:</b> {countryData.name?.nativeName[Object.keys(countryData.name?.nativeName)[0]].common} </p>
            <p>
              <b>Population: </b>
              {Intl.NumberFormat("en-US").format(countryData.population)}
            </p>
            <p><b>Region: </b> {countryData.region}</p>
            <p><b>Sub Region: </b> {countryData.subregion}</p>
            <p><b>Capital:</b> {countryData.capital}</p>
          </div>
          <div className={style.right}>
            <p><b>Top Level Domain: </b>{countryData.tld}</p>
            <p><b>Currencies: </b>{curKeys}</p>
            <p><b>Languages:</b>{languages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;