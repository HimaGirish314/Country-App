import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './main.css';
const url="https://restcountries.com/v2/all";

const Main = () => {
    const [countryData,setCountryData]=useState([])
    
    //Pagination
    const [pageNumber,setPageNumber]=useState(0)
    const usersPerpage=10;
    const perPagevisited=pageNumber*usersPerpage
    const displayUsers=countryData.slice(perPagevisited,perPagevisited+usersPerpage)

    // Fetching Data from APi
    const DataFetch=async ()=>{
        const res=await axios.get(url);
        setCountryData(res.data)
    }
    useEffect(()=>{
        DataFetch()
    },[countryData])

    const pageCount=Math.ceil(countryData.length/usersPerpage);
    const changePage=({selected})=>{
            setPageNumber(selected)
    }
  return (
    <section className='container'>
        <div className="card-container">
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            />
            {
                displayUsers.map((data,id)=>{
                    return (
                        <div className='all-cards'>
                         <div>
                            <img src={data.flag} alt="country-flag" />
                        </div>
                        <div className="about-card">
                            <h2>{data.name}</h2>
                            {/* <button>ViewMore...</button> */}
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