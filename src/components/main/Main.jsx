import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import './main.css';
const url="https://restcountries.com/v2/all";

const Main = () => {
    const [countryData,setCountryData]=useState([])
    const DataFetch=async ()=>{
        const res=await axios.get(url);
        setCountryData(res.data)
    }
    useEffect(()=>{
        DataFetch()
    },[countryData])
  return (
    <section className='container'>
        <div className="card-container">
            {
                countryData.map((data,id)=>{
                    return (
                        <div className='all-cards'>
                         <div>
                            <img src={data.flag} alt="country-flag" />
                        </div>
                        <div className="about-card">
                            <h2>{data.name}</h2>
                            <button>ViewMore...</button>
                        </div>
                        </div>
                       
                    )
                })
            }
        </div>
        
    </section>
  )
}

export default Main