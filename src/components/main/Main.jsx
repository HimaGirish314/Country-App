import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import './main.css';
import Pagination from './Pagination';
const url="https://restcountries.com/v2/all";

const Main = () => {
    const [countryData,setCountryData]=useState([])
    const[postPerPage]=useState(8)
    const [currentPage,setCurrentPage]=useState(1)

    const lastIndexNumber=postPerPage*currentPage;
    const firstIndexNumber=lastIndexNumber-postPerPage
    const perPagePost=countryData.slice(firstIndexNumber,lastIndexNumber);
    const DataFetch=async ()=>{
        const res=await axios.get(url);
        setCountryData(res.data)
    }
    useEffect(()=>{
        DataFetch()
    },[countryData])
    const pagination=(num)=>{
        setCurrentPage(num)
    }
  return (
    <section className='container'>
        {/* <Pagination countryLength={countryData.length} postPerPage={postPerPage} pagination={pagination} /> */}
        <div className="card-container">
            {
                perPagePost.map((data,id)=>{
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